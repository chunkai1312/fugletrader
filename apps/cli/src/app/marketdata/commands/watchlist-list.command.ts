import Table from 'cli-table3';
import { CommandRunner, SubCommand } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';
import { red } from 'chalk';

@SubCommand({
  name: 'list',
  description: 'list all watchlists',
})
export class WatchlistListCommand extends CommandRunner {
  constructor(@InjectConfigstore() private readonly configstore: Configstore) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    try {
      const watchlists = this.configstore.get('watchlists') ?? {};
      const table = new Table({ head: ['觀察清單', '證券代號'] });
      Object.entries(watchlists).forEach(([key, value]) => {
        table.push([
          key,
          value.toString(),
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
