import { Question, QuestionSet } from 'nest-commander';
import { Configstore, InjectConfigstore } from 'nest-configstore';

@QuestionSet({ name: 'create-watchlist' })
export class CreateWatchlistQuestion {
  constructor(@InjectConfigstore() private readonly configstore: Configstore) {}

  @Question({
    type: 'input',
    message: '清單名稱:',
    name: 'listName',
  })
  parseListName(val: string) {
    return val;
  }

  @Question({
    type: 'confirm',
    message: '將股票加入清單嗎？',
    name: 'symbolAdd',
    when: (input) => !input.symbol,
  })
  parseSymbolAdd(val: string) {
    return val;
  }

  @Question({
    type: 'input',
    message: '證券代號:',
    name: 'symbol',
    when: (input) => input.symbolAdd,
  })
  parseSymbol(val: string) {
    return Array.from(new Set(val.split(',')));
  }

  @Question({
    type: 'confirm',
    message: '確定建立嗎?',
    name: 'confirm',
  })
  parseConfirm(val: string) {
    return val;
  }
}
