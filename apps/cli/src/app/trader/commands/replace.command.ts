import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { green, red } from 'chalk';
import { TraderService } from '../trader.service';

interface ReplaceOrderCommandOptions {
  id: string;
  type: string;
  price: number;
  quantity: number;
  confirm: number;
}

@Command({
  name: 'replace',
  description: 'replace a working order',
})
export class ReplaceOrderCommand extends CommandRunner {
  constructor(
    private readonly inquirer: InquirerService,
    private readonly traderService: TraderService
  ) {
    super();
  }

  async run(passedParam: string[], options?: ReplaceOrderCommandOptions): Promise<void> {
    const answers = await this.inquirer.prompt('replace-order', options);
    const { confirm, id, ...order } = answers;
    if (confirm) {
      try {
        await this.traderService.replaceOrder(id, order);
        console.log(`${green('✔')} 已改單`);
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
