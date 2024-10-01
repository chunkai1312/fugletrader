import { Module } from '@nestjs/common';
import { MarketDataService } from './marketdata.service';
import { MarketDataController } from './marketdata.controller';

@Module({
  providers: [MarketDataService],
  controllers: [MarketDataController],
})
export class MarketDataModule {}
