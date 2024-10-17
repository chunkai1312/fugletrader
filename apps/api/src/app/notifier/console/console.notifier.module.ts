import { Module } from '@nestjs/common';
import { ConsoleNotifierService } from './console.notifier.service';
import { NotifierService } from '../notifier.service';

@Module({
  providers: [
    {
      provide: NotifierService,
      useClass: ConsoleNotifierService,
    },
  ],
  exports: [
    NotifierService,
  ],
})
export class ConsoleNotifierModule {}
