import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { InjectConfigstore, Configstore } from 'nest-configstore';
import { FUGLETRADER_API_URL } from '../config/config.constants';

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
      const json = JSON.stringify(order, null, 2);
      console.log();
      console.log(`Webhook URL:`);
      console.log(`${this.configstore.get(FUGLETRADER_API_URL)}/api/trader/orders`);
      console.log();
      console.log('將以下 webhook URL 複製並貼上至您的 TradingView 策略快訊設置中:');
      console.log(`${json}\n`);
      console.log('請勿與他人分享您的 webhook 訊息，因為它包含您的私人資訊，可能會導致接收錯誤或詐騙訊號。');
      console.log('此外，複製時請勿更改訊息模板。');
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
