import Table from 'cli-table3';
import numeral from 'numeral';
import { DateTime } from 'luxon';
import { Command, CommandRunner, Option } from 'nest-commander';
import { red } from 'chalk';
import { TraderService } from '../trader.service';

interface TransactionsCommandOptions {
  duration: '0d' | '3d' | '1m' | '3m';
  startDate: string;
  endDate: string;
}

@Command({
  name: 'transactions',
  aliases: ['tx'],
  description: 'display transactions',
})
export class TransactionsCommand extends CommandRunner {
  constructor(private readonly traderService: TraderService) {
    super();
  }

  async run(passedParam: string[], options: TransactionsCommandOptions): Promise<void> {
    try {
      const data = await this.traderService.getTransactions(options);
      const table = new Table({ head: ['成交日', '交易別', '證券代號', '證券名稱', '成交均價', '股數小計', '已實現', '已實現損益率'] });
      data.forEach(row => {
        table.push([
          DateTime.fromFormat(row.cDate, 'yyyyMMdd').toFormat('yyyy/MM/dd'),
          this.parseTradeType(row),
          row.stkNo,
          row.stkNa,
          numeral(row.priceAvg).format('0.00'),
          numeral(row.qty).format('0,0'),
          numeral(row.make).format('0,0'),
          numeral(row.makePer).divide(100).format('0.00%'),
        ]);
      });
      console.log(table.toString());
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }

  @Option({
    flags: '-d, --duration [duration]',
    description: '期間',
  })
  parseDuration(val: string): string {
    return val;
  }

  @Option({
    flags: '-start, --start-date [date]',
    description: '開始日期',
  })
  parseStartDate(val: string): string {
    return val;
  }

  @Option({
    flags: '-end, --end-date [date]',
    description: '結束日期',
  })
  parseEndDate(val: string): string {
    return val;
  }

  private parseTradeType(transaction: any) {
    const { buySell, trade } = transaction;
    const side = { 'B': '買進', 'S': '賣出' };
    const type = { '0': '現股', '3': '融資', '4': '融券', 'A': '現沖賣' };
    return `${type[trade]}${side[buySell]}`;
  }
}
