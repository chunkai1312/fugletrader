import { Module } from '@nestjs/common';
import { WebhookModule } from './webhook/webhook.module';
import { TraderModule } from './trader/trader.module';
import { PACKAGE_NAME } from './constants';
import { ConfigModule } from './config/config.module';
import { ConfigstoreModule } from 'nest-configstore';

@Module({
  imports: [
    ConfigstoreModule.forRoot({ packageName: PACKAGE_NAME }),
    TraderModule,
    WebhookModule,
    ConfigModule,
  ],
})
export class AppModule {}
