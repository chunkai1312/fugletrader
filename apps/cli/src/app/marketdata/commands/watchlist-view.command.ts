import Table from 'cli-table3';
import numeral from 'numeral';
import { CommandRunner, InquirerService, SubCommand } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';
import { red } from 'chalk';
import { MarketDataService } from '../marketdata.service';

type SelectWatchlistOptions = { listName: string; }

@SubCommand({
  name: 'view',
  arguments: '[list-name]',
  description: 'view a specific watchlist',
})
export class WatchlistViewCommand extends CommandRunner {
  constructor(
    @InjectConfigstore() private readonly configstore: Configstore,
    private readonly inquirer: InquirerService,
    private readonly marketDataService: MarketDataService,
  ) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const answers = await this.inquirer.prompt('select-watchlist', {
        listName: passedParam[0],
      }) as SelectWatchlistOptions;

      const { listName } = answers;

      const watchlists = this.configstore.get('watchlists') ?? {};
      if (!watchlists[listName]) {
        throw new Error(`觀察清單 '${listName}' 不存在`);
      }

      const data = await Promise.all(
        watchlists[listName].map(symbol => this.marketDataService.getQuote(symbol))
      );
      const table = new Table({ head: ['代號', '股票', '買進', '賣出', '成交', '漲跌', '漲幅', '單量', '委買', '委賣', '總量', '開盤', '最高', '最低', '昨收'] });
      data.forEach(row => {
        table.push([
          row.symbol,
          row.name,
          numeral(row.bids[0]?.price).format('0.00'),
          numeral(row.asks[0]?.price).format('0.00'),
          numeral(row.lastPrice).format('0.00'),
          numeral(row.change).format('+0.00'),
          `${numeral(row.changePercent).format('+0.00')}%`,
          row.lastSize,
          row.bids[0]?.size,
          row.asks[0]?.size,
          row.total?.tradeVolume,
          numeral(row.openPrice).format('0.00'),
          numeral(row.highPrice).format('0.00'),
          numeral(row.lowPrice).format('0.00'),
          numeral(row.previousClose).format('0.00'),
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
