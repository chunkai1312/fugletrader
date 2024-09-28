import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { green, red } from 'chalk';
import { TraderService } from '../trader.service';

interface CancelOrderCommandOptions {
  id: string;
  confirm: number;
}

@Command({
  name: 'cancel',
  description: 'cancel a working order',
})
export class CancelCommand extends CommandRunner {
  constructor(
    private readonly inquirer: InquirerService,
    private readonly traderService: TraderService
  ) {
    super();
  }

  async run(passedParam: string[], options?: CancelOrderCommandOptions): Promise<void> {
    const answers = await this.inquirer.prompt('cancel-order', options);
    const { confirm, id } = answers;
    if (confirm) {
      try {
        await this.traderService.cancelOrder(id);
        console.log(`${green('✔')} 已刪單`);
      } catch (err) {
        console.error(`${red('✖')} ${err.message}`);
      } finally {
        console.log();
      }
    }
  }

  @Option({
    flags: '-i, --id [string]',
    description: '委託書號',
  })
  parseId(val: string): string {
    return val;
  }
}
