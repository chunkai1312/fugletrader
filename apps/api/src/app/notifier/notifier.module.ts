import { Global, Module } from '@nestjs/common';
import { Notifier } from './notifier.enum';
import { LineNotifyNotifierModule } from './line-notify/line-notify-notifier.module';
import { LineNotifierModule } from './line/line-notifier.module';
import { TelegramNotifierModule } from './telegram/telegram-notifier.module';
import { DiscordNotifierModule } from './discord/discord-notifier.module';
import { ConsoleNotifierModule } from './console/console.notifier.module';

@Global()
@Module({})
export class NotifierModule {
  static use(notifier: Notifier) {
    const modules = {
      [Notifier.LineNotify]: LineNotifyNotifierModule,
      [Notifier.Line]: LineNotifierModule,
      [Notifier.Telegram]: TelegramNotifierModule,
      [Notifier.Discord]: DiscordNotifierModule,
    };
    const notifierModule = modules[notifier] || ConsoleNotifierModule;
    return {
      module: NotifierModule,
      imports: [notifierModule],
      exports: [notifierModule],
    };
  }
}
