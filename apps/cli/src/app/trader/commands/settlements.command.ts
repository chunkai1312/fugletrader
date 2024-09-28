import Table from 'cli-table3';
import numeral from 'numeral';
import { DateTime } from 'luxon';
import { Command, CommandRunner } from 'nest-commander';
import { red } from 'chalk';
import { TraderService } from '../trader.service';

@Command({
  name: 'settlements',
  description: 'display incoming settlements',
})
export class SettlementsCommand extends CommandRunner {
  constructor(private readonly traderService: TraderService) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const data = await this.traderService.getSettlements();
      const table = new Table({ head: ['成交日期', '交割日期', '應收付金額'] });
      data.forEach(row => {
        table.push([
          DateTime.fromFormat(row.date, 'yyyyMMdd').toFormat('yyyy/MM/dd'),
          DateTime.fromFormat(row.cDate, 'yyyyMMdd').toFormat('yyyy/MM/dd'),
          numeral(row.price).format('0,0'),
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
