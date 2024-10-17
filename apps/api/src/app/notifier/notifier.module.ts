import { Module } from '@nestjs/common';
import { Notifier } from './notifier.enum';
import { LineNotifyNotifierModule } from './line-notify/line-notify-notifier.module';

@Module({})
export class NotifierModule {
  static use(notifier: Notifier) {
    const modules = {
      [Notifier.LineNotify]: LineNotifyNotifierModule,
    };
    const notifierModule = modules[notifier];
    return {
      module: NotifierModule,
      imports: [notifierModule],
      exports: [notifierModule],
    };
  }
}
