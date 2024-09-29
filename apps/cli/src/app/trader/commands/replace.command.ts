import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { green, red } from 'chalk';
import { TraderService } from '../trader.service';
import { ReplaceOrderDto } from '../dto/replace-order.dto';

type ReplaceOrderOptions = ReplaceOrderDto & { id: string, confirm: boolean };

interface ReplaceOrderCommandOptions {
  price?: number;
  quantity?: number;
}

@Command({
  name: 'replace',
  arguments: '[order-id]',
  description: 'replace a working order',
})
export class ReplaceOrderCommand extends CommandRunner {
  constructor(
    private readonly inquirerService: InquirerService,
    private readonly traderService: TraderService
  ) {
    super();
  }

  async run(passedParam: string[], options?: ReplaceOrderCommandOptions): Promise<void> {
    try {
      const { price, quantity } = options;

      if (price && quantity) {
        throw new TypeError('Only one of the \'price\' or \'quantity\' options can be specified');
      }

      const answers = await this.inquirerService.prompt('replace-order', {
        id: passedParam[0],
        price,
        quantity,
      }) as ReplaceOrderOptions;

      const { confirm, id, ...order } = answers;

      if (confirm) {
        await this.traderService.replaceOrder(id, order);
        console.log(`${green('✔')} 已改單`);
      }
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }

  @Option({
    flags: '-p, --price [number]',
    description: 'set the new price for the order',
  })
  parsePrice(val: string): number {
    return Number(val);
  }

  @Option({
    flags: '-q, --quantity [number]',
    description: 'set the new quantity for the order',
  })
  parseQuantity(val: string): number {
    return Number(val);
  }
}
