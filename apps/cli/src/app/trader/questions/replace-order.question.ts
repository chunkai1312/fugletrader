import { Question, QuestionSet, WhenFor } from 'nest-commander';

@QuestionSet({ name: 'replace-order' })
export class ReplaceOrderQuestion {
  @Question({
    type: 'input',
    message: '委託書號:',
    name: 'id',
  })
  parseId(val: string) {
    return val;
  }

  @Question({
    type: 'list',
    message: '交易:',
    name: 'type',
    choices: [
      { name: '改價', value: 'price' },
      { name: '改量', value: 'quantity' },
    ],
  })
  parseApCode(val: string) {
    return val;
  }

  @Question({
    type: 'number',
    message: '價格:',
    name: 'price',
    when: (input) => input.type === 'price',
  })
  parsePrice(val: string) {
    return val;
  }

  @Question({
    type: 'number',
    message: '數量:',
    name: 'quantity',
    when: (input) => input.type === 'quantity',
  })
  parseQuantity(val: string) {
    return val;
  }

  @Question({
    type: 'confirm',
    message: '確認委託無誤?',
    name: 'confirm',
  })
  parseConfirm(val: string) {
    return val;
  }
}
