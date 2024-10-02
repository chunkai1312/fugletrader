import { ChoicesFor, Question, QuestionSet } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';
import { yellow } from 'chalk';

@QuestionSet({ name: 'remove-symbol' })
export class RemoveSymbolQuestion {
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

  @Question({
    type: 'input',
    message: '證券代號:',
    name: 'symbol',
  })
  parseSymbol(val: string) {
    return Array.from(new Set(val.split(',')));
  }

  @Question({
    type: 'confirm',
    message: '確定移除嗎?',
    name: 'confirm',
  })
  parseConfirm(val: string) {
    return val;
  }
}
