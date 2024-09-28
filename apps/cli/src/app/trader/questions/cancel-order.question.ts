import { Question, QuestionSet, WhenFor } from 'nest-commander';

@QuestionSet({ name: 'cancel-order' })
export class CancelOrderQuestion {
  @Question({
    type: 'input',
    message: '委託書號:',
    name: 'id',
  })
  parseId(val: string) {
    return val;
  }

  @Question({
    type: 'confirm',
    message: '確認刪除嗎?',
    name: 'confirm',
  })
  parseConfirm(val: string) {
    return val;
  }
}
