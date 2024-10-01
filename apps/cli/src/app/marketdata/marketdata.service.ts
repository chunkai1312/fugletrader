import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectConfigstore, Configstore } from 'nest-configstore';
import { firstValueFrom } from 'rxjs';
import { FUGLETRADER_API_URL } from '../config/config.constants';

@Injectable()
export class MarketDataService {
  constructor(
    private readonly httpService: HttpService,
    @InjectConfigstore() private readonly configstore: Configstore,
  ) {}

  get apiUrl() {
    return this.configstore.get(FUGLETRADER_API_URL) || process.env.FUGLETRADER_API_URL;
  }

  async getQuote(symbol: string) {
    const url = `${this.apiUrl}/api/marketdata/quote/${symbol}`;
    const data = await firstValueFrom(this.httpService.get(url)).then(res => res.data);
    return data;
  }
}
