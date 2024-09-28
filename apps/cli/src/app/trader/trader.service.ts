import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectConfigstore, Configstore } from 'nest-configstore';
import { firstValueFrom } from 'rxjs';
import { FUGLETRADER_API_URL } from '../config/config.constants';
import { PlaceOrderDto } from './dto/place-order.dto';
import { ReplaceOrderDto } from './dto/replace-order.dto';
import { GetTransactionsDto } from './dto/get-transactions.dto';

@Injectable()
export class TraderService {
  constructor(
    private readonly httpService: HttpService,
    @InjectConfigstore() private readonly configstore: Configstore,
  ) {}

  get apiUrl() {
    return this.configstore.get(FUGLETRADER_API_URL) || process.env.FUGLETRADER_API_URL;
  }

  async getOrders() {
    const url = `${this.apiUrl}/api/trader/orders`;
    const data = await firstValueFrom(this.httpService.get(url)).then(res => res.data);
    return data;
  }

  async placeOrder(placeOrderDto: PlaceOrderDto) {
    const url = `${this.apiUrl}/api/trader/orders`;
    const data = await firstValueFrom(this.httpService.post(url, placeOrderDto)).then(res => res.data);
    return data;
  }

  async replaceOrder(id: string, replaceOrderDto: ReplaceOrderDto) {
    const url = `${this.apiUrl}/api/trader/orders/${id}`;
    const data = await firstValueFrom(this.httpService.patch(url, replaceOrderDto)).then(res => res.data);
    return data;
  }

  async cancelOrder(id: string) {
    const url = `${this.apiUrl}/api/trader/orders/${id}`;
    const data = await firstValueFrom(this.httpService.delete(url)).then(res => res.data);
    return data;
  }

  async getTransactions(getTransactionsDto: GetTransactionsDto) {
    const url = `${this.apiUrl}/api/trader/transactions`;
    const data = await firstValueFrom(this.httpService.get(url, { params: getTransactionsDto })).then(res => res.data);
    return data;
  }

  async getInventories() {
    const url = `${this.apiUrl}/api/trader/inventories`;
    const data = await firstValueFrom(this.httpService.get(url)).then(res => res.data);
    return data;
  }

  async getSettlements() {
    const url = `${this.apiUrl}/api/trader/settlements`;
    const data = await firstValueFrom(this.httpService.get(url)).then(res => res.data);
    return data;
  }

  async getBalance() {
    const url = `${this.apiUrl}/api/trader/balance`;
    const data = await firstValueFrom(this.httpService.get(url)).then(res => res.data);
    return data;
  }
}
