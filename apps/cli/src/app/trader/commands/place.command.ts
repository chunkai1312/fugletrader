import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { green, red } from 'chalk';
import { TraderService } from '../trader.service';
import { PlaceOrderDto } from '../dto/place-order.dto';

type PlaceOrderOptions = PlaceOrderDto & { confirm: boolean };

interface PlaceCommandOptions {
  buy?: boolean;
  sell?: boolean;
}

@Command({
  name: 'place',
  arguments: '[symbol]',
  aliases: ['trade'],
  description: 'place an order',
})
export class PlaceCommand extends CommandRunner {
  constructor(
    private readonly inquirer: InquirerService,
    private readonly traderService: TraderService
  ) {
    super();
  }

  async run(passedParam: string[], options?: PlaceCommandOptions): Promise<void> {
    try {
      const [symbol] = passedParam;
      const { buy, sell } = options;

      if (buy && sell) {
        throw new TypeError('Only one of the \'buy\' or \'sell\' options can be specified');
      }

      const stockNo = symbol;
      const buySell = buy ? 'B' : sell ? 'S' : undefined;

      const answers = await this.inquirer.prompt('place-order', {
        stockNo,
        buySell
      }) as PlaceOrderOptions;

      const { confirm, ...order } = answers;

      if (confirm) {
        await this.traderService.placeOrder(order);
        console.log(`${green('✔')} 已下單`);
      }
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }

  @Option({
    flags: '-b, --buy',
    description: 'place a buy order',
  })
  parseBuy(): boolean {
    return true;
  }

  @Option({
    flags: '-s, --sell',
    description: 'place a sell order',
  })
  parseSell(): boolean {
    return true;
  }
}
