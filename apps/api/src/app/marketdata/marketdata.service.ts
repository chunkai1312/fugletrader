import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRestClient } from '@fugle/marketdata-nest';
import { RestClient } from '@fugle/marketdata';

@Injectable()
export class MarketDataService {
  constructor(
    @InjectRestClient() private readonly restClient: RestClient,
  ) {}

  async getQuote(symbol: string) {
    return this.restClient.stock.intraday.quote({ symbol })
      .catch(err => {
        throw new InternalServerErrorException(err.message);
      });
  }
}
