import { CommandRunner, InquirerService, SubCommand } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';
import { green, red } from 'chalk';

type DeleteWatchlistQptions = { listName: string; confirm: boolean }

@SubCommand({
  name: 'delete',
  arguments: '[list-name]',
  description: 'delete a watchlist',
})
export class WatchlistDeleteCommand extends CommandRunner {
  constructor(
    @InjectConfigstore() private readonly configstore: Configstore,
    private readonly inquirer: InquirerService,
  ) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const answers = await this.inquirer.prompt('delete-watchlist', {
        listName: passedParam[0],
      }) as DeleteWatchlistQptions;

      const { confirm, listName } = answers;

      if (confirm) {
        const watchlists = this.configstore.get('watchlists') ?? {};
        if (!watchlists[listName]) {
          throw new Error(`觀察清單 '${listName}' 不存在`);
        }
        delete watchlists[listName];
        this.configstore.set('watchlists', watchlists);
        console.log(`${green('✔')} 觀察清單 '${listName}' 已刪除`);
      }
    } catch (err) {
      console.error(`${red('✖')} ${err.message}`);
    } finally {
      console.log();
    }
  }
}
