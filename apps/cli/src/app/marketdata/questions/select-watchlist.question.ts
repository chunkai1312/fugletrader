import { ChoicesFor, Question, QuestionSet } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';
import { yellow } from 'chalk';

@QuestionSet({ name: 'select-watchlist' })
export class SelectWatchlistQuestion {
  constructor(@InjectConfigstore() private readonly configstore: Configstore) {}

  @ChoicesFor({ name: 'listName' })
  async getListNameChoices() {
    const watchlists = await this.configstore.get('watchlists');

    const choices = Object.keys(watchlists)
      .map(watchlist => ({ name: watchlist, value: watchlist }));

    if (!choices.length) {
      console.log(`${yellow('⚠︎')} No watchlist available`);
      process.exit(0);
    }

    return choices;
  }

  @Question({
    type: 'list',
    message: '選擇觀察清單:',
    name: 'listName',
  })
  parseListName(val: string) {
    return val;
  }
}
