import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { green, red } from 'chalk';
import { TraderService } from '../trader.service';

interface PlaceCommandOptions {
  stockNo: string;
  apCode: string;
  trade: string;
  bsFlag: string;
  buySell: string;
  priceFlag: string;
  price: number;
  quantity: number;
  confirm: number;
}

@Command({
  name: 'place',
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
    const answers = await this.inquirer.prompt('place-order', options);
    const { confirm, ...order } = answers;
    if (confirm) {
      try {
        await this.traderService.placeOrder(order);
        console.log(`${green('✔')} 已下單`);
      } catch (err) {
        console.error(`${red('✖')} ${err.message}`);
      } finally {
        console.log();
      }
    }
  }

  @Option({
    flags: '-s, --symbol [string]',
    description: '股票代號',
  })
  parseSymbol(val: string): string {
    return val;
  }
}
