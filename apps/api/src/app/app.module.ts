import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FugleTradeModule } from '@fugle/trade-nest';
import { FugleMarketDataModule } from '@fugle/marketdata-nest';
import { TraderModule } from './trader/trader.module';
import { MarketDataModule } from './marketdata/marketdata.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FugleTradeModule.forRoot({
      config: {
        apiUrl: process.env.FUGLE_TRADE_API_URL,
        apiKey: process.env.FUGLE_TRADE_API_KEY,
        apiSecret: process.env.FUGLE_TRADE_API_SECRET,
        aid: process.env.FUGLE_TRADE_AID,
        password: process.env.FUGLE_TRADE_PASSWORD,
        certPath: process.env.FUGLE_TRADE_CERT_PATH,
        certPass: process.env.FUGLE_TRADE_CERT_PASS,
      },
    }),
    FugleMarketDataModule.forRoot({
      apiKey: process.env.FUGLE_MARKETDATA_API_KEY,
    }),
    TraderModule,
    MarketDataModule,
  ],
})
export class AppModule {}
