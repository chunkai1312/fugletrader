import { CommandRunner, InquirerService, Option, SubCommand } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';
import { green, red } from 'chalk';

interface WatchlistNewCommandOptions {
  symbol?: string[];
}

type CreateWatchlistQptions = WatchlistNewCommandOptions & { listName: string; confirm: boolean }

@SubCommand({
  name: 'new',
  arguments: '[list-name]',
  description: 'create a new watchlist',
})
export class WatchlistNewCommand extends CommandRunner {
  constructor(
    @InjectConfigstore() private readonly configstore: Configstore,
    private readonly inquirer: InquirerService,
  ) {
    super();
  }

  async run(passedParam: string[], options: WatchlistNewCommandOptions): Promise<void> {
    try {
      const answers = await this.inquirer.prompt('create-watchlist', {
        listName: passedParam[0],
        symbol: options.symbol,
      }) as CreateWatchlistQptions;

      const { confirm, listName, symbol } = answers;

      if (confirm) {
        const watchlists = this.configstore.get('watchlists') ?? {};
        if (watchlists[listName]) {
          throw new Error(`觀察清單 '${listName}' 已存在`);
        }
        watchlists[listName] = symbol ?? [];
        this.configstore.set('watchlists', watchlists);
        console.log(`${green('✔')} 觀察清單 '${listName}' 已建立`);
      }
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }

  @Option({
    flags: '-s, --symbol [code]',
    description: 'add specified stock symbol(s) to the watchlist (use comma `,` to separate multiple symbols)',
  })
  parseSymbol(val: string): string[] {
    return Array.from(new Set(val.split(',')));
  }
}
