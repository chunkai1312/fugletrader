import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { InjectConfigstore, Configstore } from 'nest-configstore';
import { FUGLETRADER_API_URL } from '../config/config.constants';
import { red, whiteBright, yellowBright } from 'chalk';

interface WebhookCommandOptions {
  name: string;
  symbol: string;
  apCode: string;
  trade: string;
  bsFlag: string;
  side: string;
  priceFlag: string;
  price: number;
  quantity: number;
  confirm: number;
}

@Command({
  name: 'webhook',
  arguments: '[name]',
  description: 'set up a webhook',
})
export class WebhookCommand extends CommandRunner {
  constructor(
    @InjectConfigstore() private readonly configstore: Configstore,
    private readonly inquirer: InquirerService,
  ) {
    super();
  }

  async run(passedParam: string[], options?: WebhookCommandOptions): Promise<void> {
    const answers = await this.inquirer.prompt('webhook', { name: passedParam[0], ...options });
    const { name, confirm, ...order } = answers;

    if (confirm) {
      const webhookUrl = `${this.configstore.get(FUGLETRADER_API_URL)}/api/trader/orders`;
      const message = JSON.stringify(order);

      console.log();
      console.log(`Copy and paste the ${yellowBright('Webhook URL')} below to your TradingView Alert settings:`);
      console.log(`\n  ${whiteBright(webhookUrl)}`);
      console.log();
      console.log(`Copy and paste the ${yellowBright('Message')} below to your TradingView Alert settings:`);
      console.log(`\n  ${whiteBright(message)}`);
      console.log();
      console.log(`${red(`Please do not share your webhook URL with others, as you may be vulnerable to receiving false or scam messages.`)}`);
      console.log(`${red(`All received TradingView alerts are sent based on the user's alert preferences and are not related to FugleTrader.`)}`);
      console.log();
    }
  }

  @Option({
    flags: '-s, --symbol [string]',
    description: 'Select the symbol want to use for webhook trading',
  })
  parseSymbol(val: string): string {
    return val;
  }
}
