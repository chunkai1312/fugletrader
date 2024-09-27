import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectFugleTrade } from '@fugle/trade-nest';
import { FugleTrade, Order, OrderPayload } from '@fugle/trade';
import { PlaceOrderDto } from './dto/place-order.dto';
import { ReplaceOrderDto } from './dto/replace-order.dto';
import { GetTransactionsDto } from './dto/get-transactions.dto';

@Injectable()
export class TraderService {
  constructor(@InjectFugleTrade() private readonly fugle: FugleTrade) {}

  async getOrders() {
    return this.fugle.getOrders()
      .then(orders => orders.map(order => order.payload))
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }

  async placeOrder(placeOrderDto: PlaceOrderDto) {
    const payload = placeOrderDto as OrderPayload;
    const order = new Order(payload);
    return this.fugle.placeOrder(order)
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }

  async replaceOrder(id: string, replaceOrderDto: ReplaceOrderDto) {
    const orders = await this.fugle.getOrders();
    const order = orders.find(order =>
      [order.payload.ordNo, order.payload.preOrdNo].includes(id)
    );
    if (!order) throw new NotFoundException('order not found');

    return this.fugle.replaceOrder(order, replaceOrderDto)
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }

  async cancelOrder(id: string) {
    const orders = await this.fugle.getOrders();
    const order = orders.find(order =>
      [order.payload.ordNo, order.payload.preOrdNo].includes(id)
    );
    if (!order) throw new NotFoundException('order not found');

    return this.fugle.cancelOrder(order)
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }

  async getTransactions(getTransactionsDto: GetTransactionsDto) {
    const { duration, startDate, endDate } = getTransactionsDto;
    return this.fugle.getTransactions({ duration, startDate, endDate })
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }

  async getInventories() {
    return this.fugle.getInventories()
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }

  async getSettlements() {
    return this.fugle.getSettlements()
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }

  async getBalance() {
    return this.fugle.getBalance()
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }
}