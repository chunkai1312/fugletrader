import Table from 'cli-table3';
import numeral from 'numeral';
import { Command, CommandRunner } from 'nest-commander';
import { red } from 'chalk';
import { TraderService } from '../trader.service';

@Command({
  name: 'balance',
  description: 'display bank account balance',
})
export class BalanceCommand extends CommandRunner {
  constructor(private readonly traderService: TraderService) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const data = await this.traderService.getBalance();
      const table = new Table();
      table.push(
        { '銀行餘額': [numeral(data.availableBalance).format('0,0')] },
        { '今日票據交換金額': [numeral(data.exchangeBalance).format('0,0')] },
        { '圈存金額': [numeral(data.stockPreSaveAmount).format('0,0')] },
      );
      console.log(table.toString());
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }
}
