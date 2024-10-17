import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramNotifierService } from './telegram-notifier.service';
import { NotifierService } from '../notifier.service';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN,
    }),
  ],
  providers: [
    {
      provide: NotifierService,
      useClass: TelegramNotifierService,
    },
  ],
  exports: [
    NotifierService,
  ],
})
export class TelegramNotifierModule {}
