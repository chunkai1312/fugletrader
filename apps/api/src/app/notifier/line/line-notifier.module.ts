import { Module } from '@nestjs/common';
import { LineBotModule } from 'nest-line-bot';
import { LineNotifierService } from './line-notifier.service';
import { NotifierService } from '../notifier.service';

@Module({
  imports: [
    LineBotModule.forRoot({
      channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
      channelSecret: process.env.LINE_CHANNEL_SECRET,
    }),
  ],
  providers: [
    {
      provide: NotifierService,
      useClass: LineNotifierService,
    },
  ],
  exports: [
    NotifierService,
  ],
})
export class LineNotifierModule {}
