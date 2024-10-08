import Table from 'cli-table3';
import numeral from 'numeral';
import { Command, CommandRunner } from 'nest-commander';
import { red } from 'chalk';
import { MarketDataService } from '../marketdata.service';

@Command({
  name: 'quote',
  aliases: ['q'],
  arguments: '<symbol...>',
  description: 'display latest stock quotes',
})
export class QuoteCommand extends CommandRunner {
  constructor(private readonly marketDataService: MarketDataService) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const data = await Promise.all(
        passedParam.map(symbol => this.marketDataService.getQuote(symbol))
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
