import { ChoicesFor, Question, QuestionSet } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';
import { yellow } from 'chalk';

@QuestionSet({ name: 'delete-watchlist' })
export class DeleteWatchlistQuestion {
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
    message: '選擇刪除清單:',
    name: 'listName',
  })
  parseListName(val: string) {
    return val;
  }

  @Question({
    type: 'confirm',
    message: '確定刪除嗎?',
    name: 'confirm',
  })
  parseConfirm(val: string) {
    return val;
  }
}
