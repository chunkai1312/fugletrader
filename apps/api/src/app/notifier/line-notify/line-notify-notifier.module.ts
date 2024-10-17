import { Module } from '@nestjs/common';
import { LineNotifyModule } from 'nest-line-notify';
import { LineNotifyNotifierService } from './line-notify-notifier.service';
import { NotifierService } from '../notifier.service';

@Module({
  imports: [
    LineNotifyModule.forRoot({
      accessToken: process.env.LINE_NOTIFY_ACCESS_TOKEN,
    }),
  ],
  providers: [
    {
      provide: NotifierService,
      useClass: LineNotifyNotifierService,
    },
  ],
  exports: [
    NotifierService,
  ],
})
export class LineNotifyNotifierModule {}
