import Table from 'cli-table3';
import numeral from 'numeral';
import { Command, CommandRunner } from 'nest-commander';
import { red } from 'chalk';
import { TraderService } from '../trader.service';

@Command({
  name: 'inventories',
  aliases: ['positions'],
  description: 'display inventories',
})
export class InventoriesCommand extends CommandRunner {
  constructor(private readonly traderService: TraderService) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const data = await this.traderService.getInventories();
      const table = new Table({ head: ['證券代號', '證券名稱', '現價', '成交均價', '庫存股', '未實現', '獲利率', '市值(元)', '持有成本', '淨值(元)', '淨值含成本(元)'] });
      data.forEach(row => {
        table.push([
          row.stkNo,
          row.stkNa,
          numeral(row.priceMkt).format('0.00'),
          numeral(row.priceAvg).format('0.00'),
          numeral(row.costQty).format('0,0'),
          numeral(row.makeASum).format('0,0'),
          numeral(row.makeAPer).divide(100).format('0.00%'),
          numeral(row.valueMkt).format('0,0'),
          numeral(row.costSum).format('0,0'),
          numeral(row.valueNow).format('0,0'),
          numeral(row.recVaSum).format('0,0'),
        ]);
      });
      console.log(table.toString());
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }
}
