import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FugleTradeModule } from '@fugle/trade-nest';
import { TraderModule } from './trader/trader.module';

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
    TraderModule,
  ],
})
export class AppModule {}
