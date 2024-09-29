import { Question, QuestionSet, ChoicesFor } from 'nest-commander';
import { yellow } from 'chalk';
import { TraderService } from '../trader.service';

@QuestionSet({ name: 'replace-order' })
export class ReplaceOrderQuestion {
  constructor(private readonly traderService: TraderService) { }

  @ChoicesFor({ name: 'id' })
  async getIdChoices() {
    const orders = await this.traderService.getOrders();

    const choices = orders
      .filter(order => order.ordNo && order.celable === '1')
      .map(order => {
        const id = order.ordNo || order.preOrdNo;
        const symbol = order.stockNo;
        const side = this.getOrderSideName(order.buySell);
        const trade = this.getTradeTypeName(order.trade);
        const type = this.getOrderTypeName(order.bsFlag);

        const price = (() => {
          const price = Number(order.odPrice);
          if (order.apCode === '2') return '收盤價';
          return (price === 0) ? this.getPriceTypeName(order.priceFlag) : price;
        })();

        const size = (() => {
          const sign = order.buySell === 'B' ? '+' : '-';
          const size = order.orgQtyShare - order.celQtyShare;
          return `${sign}${size}`;
        })();

        return {
          name: `${id}: ${type} ${trade}${side} ${size} (${symbol}) @${price}`,
          value: id,
        };
      });

    if (!choices.length) {
      console.log(`${yellow('⚠︎')} There are no orders available for replacement`);
      process.exit(0);
    }

    return choices;
  }

  @Question({
    type: 'list',
    message: '選擇修改委託單:',
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
    when: (input) => !input.price && !input.quantity,
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
    message: '確定修改嗎?',
    name: 'confirm',
  })
  parseConfirm(val: string) {
    return val;
  }

  private getOrderSideName(side: string) {
    const names = {
      'B': '買進',
      'S': '賣出',
    }
    return names[side];
  }

  private getOrderTypeName(bsFlag: string) {
    const names = {
      'R': 'ROD',
      'I': 'IOC',
      'F': 'FOK',
    }
    return names[bsFlag];
  }

  private getPriceTypeName(priceFlag: string) {
    const names = {
      '0': '限價',
      '1': '平盤價',
      '2': '跌停價',
      '3': '漲停價',
      '4': '市價',
    }
    return names[priceFlag];
  }

  private getTradeTypeName(trade: string) {
    const names = {
      '0': '現股',
      '3': '融資',
      '4': '融券',
      'A': '現沖賣',
    }
    return names[trade];
  }
}
