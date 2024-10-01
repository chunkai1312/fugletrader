import { Module } from '@nestjs/common';
import { ConfigstoreModule } from 'nest-configstore';
import { MarketDataModule } from './marketdata/marketdata.module';
import { TraderModule } from './trader/trader.module';
import { WebhookModule } from './webhook/webhook.module';
import { ConfigModule } from './config/config.module';
import { PACKAGE_NAME } from './constants';

@Module({
  imports: [
    ConfigstoreModule.forRoot({ packageName: PACKAGE_NAME }),
    MarketDataModule,
    TraderModule,
    WebhookModule,
    ConfigModule,
  ],
})
export class AppModule {}
