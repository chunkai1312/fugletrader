import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { green, red } from 'chalk';
import { TraderService } from '../trader.service';

type CancelOrderOptions = { id: string, confirm: boolean };

@Command({
  name: 'cancel',
  arguments: '[order-id]',
  description: 'cancel a working order',
})
export class CancelCommand extends CommandRunner {
  constructor(
    private readonly inquirer: InquirerService,
    private readonly traderService: TraderService
  ) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const answers = await this.inquirer.prompt('cancel-order', {
        id: passedParam[0],
      }) as CancelOrderOptions;

      const { confirm, id } = answers;

      if (confirm) {
        await this.traderService.cancelOrder(id);
        console.log(`${green('✔')} 已刪單`);
      }
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }
}
