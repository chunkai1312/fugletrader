import { CommandRunner, InquirerService, Option, SubCommand } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';
import { green, red } from 'chalk';

interface WatchlistRemoveCommandOptions {
  symbol?: string[];
}

type RemoveSymbolQptions = WatchlistRemoveCommandOptions & { listName: string; confirm: boolean }

@SubCommand({
  name: 'remove',
  arguments: '[list-name]',
  description: 'remove specified stock symbol(s) from the watchlist',
})
export class WatchlistRemoveCommand extends CommandRunner {
  constructor(
    @InjectConfigstore() private readonly configstore: Configstore,
    private readonly inquirer: InquirerService,
  ) {
    super();
  }

  async run(passedParam: string[], options: WatchlistRemoveCommandOptions): Promise<void> {
    try {
      const answers = await this.inquirer.prompt('remove-symbol', {
        listName: passedParam[0],
        symbol: options.symbol,
      }) as RemoveSymbolQptions;

      const { confirm, listName, symbol } = answers;

      if (confirm) {
        const watchlists = this.configstore.get('watchlists') ?? {};
        if (!watchlists[listName]) {
          throw new Error(`觀察清單 '${listName}' 不存在`);
        }
        const watchlist = new Set(watchlists[listName]);
        symbol.forEach(s => watchlist.delete(s));
        watchlists[listName] = Array.from(watchlist);
        this.configstore.set('watchlists', watchlists);
        console.log(`${green('✔')} 觀察清單 '${listName}' 已更新`);
      }
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }

  @Option({
    flags: '-s, --symbol [code]',
    description: 'remove specified stock symbol(s) from the watchlist (use comma `,` to separate multiple symbols)',
  })
  parseSymbol(val: string): string[] {
    return Array.from(new Set(val.split(',')));
  }
}
