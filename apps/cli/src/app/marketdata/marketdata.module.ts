import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MarketDataService } from './marketdata.service';
import { Commands } from './commands';

@Module({
  imports: [HttpModule],
  providers: [
    MarketDataService,
    ...Commands,
  ],
})
export class MarketDataModule {}
