import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MarketDataService } from './marketdata.service';
import { Commands } from './commands';
import { Questions } from './questions';

@Module({
  imports: [HttpModule],
  providers: [
    MarketDataService,
    ...Commands,
    ...Questions,
  ],
})
export class MarketDataModule {}
