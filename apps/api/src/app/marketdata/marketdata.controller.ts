import { Controller, Get, Param } from '@nestjs/common';
import { MarketDataService } from './marketdata.service';

@Controller('marketdata')
export class MarketDataController {
  constructor(private readonly marketDataService: MarketDataService) {}

  @Get('/quote/:symbol')
  async getQuote(@Param('symbol') symbol: string) {
    return this.marketDataService.getQuote(symbol);
  }
}
