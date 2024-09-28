import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'webhook' })
export class WebhookQuestion {
  @Question({
    message: '名稱:',
    name: 'name',
  })
  parseName(val: string) {
    return val;
  }

  @Question({
    type: 'input',
    message: '證券代號:',
    name: 'symbol',
  })
  parseSymbol(val: string) {
    return val;
  }

  @Question({
    type: 'list',
    message: '交易:',
    name: 'apCode',
    choices: [
      { name: '整股', value: '1' },
      { name: '盤後定價', value: '2' },
      { name: '盤後零股', value: '3' },
      { name: '興櫃', value: '4' },
      { name: '盤中零股', value: '5' },
    ],
  })
  parseApCode(val: string) {
    return val;
  }

  @Question({
    type: 'list',
    message: '種類:',
    name: 'trade',
    choices: [
      { name: '現股', value: '0' },
      { name: '融資', value: '3' },
      { name: '融券', value: '4' },
      { name: '現沖賣', value: 'A' },
    ],
  })
  parseTrade(val: string) {
    return val;
  }

  @Question({
    type: 'list',
    message: '條件:',
    name: 'bsFlag',
    choices: [
      { name: 'ROD', value: 'R' },
      { name: 'IOC', value: 'I' },
      { name: 'FOK', value: 'F' },
    ],
  })
  parseBsFlag(val: string) {
    return val;
  }

  @Question({
    type: 'list',
    message: '買賣:',
    name: 'side',
    choices: [
      { name: '買進', value: 'B' },
      { name: '賣出', value: 'S' },
    ],
  })
  parseSide(val: string) {
    return val;
  }

  @Question({
    type: 'list',
    message: '類別:',
    name: 'priceFlag',
    choices: [
      { name: '限價', value: '0' },
      { name: '平盤', value: '1' },
      { name: '跌停', value: '2' },
      { name: '漲停', value: '3' },
      { name: '市價', value: '4' },
    ],
  })
  parsePriceFlag(val: string) {
    return val;
  }

  @Question({
    type: 'number',
    message: '價格:',
    name: 'price',
    when: (input) => input.priceFlag === '0',
  })
  parsePrice(val: string) {
    return val;
  }

  @Question({
    type: 'number',
    message: '數量:',
    name: 'quantity',
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
