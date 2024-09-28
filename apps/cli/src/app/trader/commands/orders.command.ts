import Table from 'cli-table3';
import numeral from 'numeral';
import { DateTime } from 'luxon';
import { Command, CommandRunner } from 'nest-commander';
import { red } from 'chalk';
import { TraderService } from '../trader.service';

@Command({
  name: 'orders',
  description: 'display existing orders',
})
export class OrdersCommand extends CommandRunner {
  constructor(private readonly traderService: TraderService) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const data = await this.traderService.getOrders();
      const table = new Table({ head: ['委託書號', '狀態', '交易別', '證券代號', '委價', '委量(股)', '成交量(股)', '原委量(股)', '取消量(股)', '委託時間'] });
      data.forEach(row => {
        table.push([
          row.ordNo || row.preOrdNo,
          this.parseOrderStatus(row),
          this.parseTradeType(row),
          row.stockNo,
          numeral(row.odPrice).format('0.00'),
          numeral(row.orgQtyShare - row.celQtyShare).format('0,0'),
          numeral(row.matQtyShare).format('0,0'),
          numeral(row.orgQtyShare).format('0,0'),
          numeral(row.celQtyShare).format('0,0'),
          DateTime.fromFormat(`${row.ordDate}${row.ordTime}`, 'yyyyMMddHHmmssSSS').toFormat('yyyy/MM/dd HH:mm:ss.SSS'),
        ]);
      });
      console.log(table.toString());
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }

  private parseTradeType(order: any) {
    const { buySell, trade, bsFlag } = order;
    const side = { 'B': '買進', 'S': '賣出' };
    const type = { '0': '現股', '3': '融資', '4': '融券', 'A': '現沖賣' };
    const flag = { 'R': 'ROD', 'I': 'IOC', 'F': 'FOK' };
    return `${type[trade]}${side[buySell]} ${flag[bsFlag]}`;
  }

  private parseOrderStatus(order: any) {
    if (order.celable === '2') return '已刪除';
    if (order.ordStatus === '1') return '預約中';
    if (order.ordStatus === '2') return '進行中';
    return '-';
  }
}
