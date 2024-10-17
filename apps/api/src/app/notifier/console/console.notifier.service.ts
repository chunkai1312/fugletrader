import { Injectable, Logger } from '@nestjs/common';
import { NotifierService } from '../notifier.service';

@Injectable()
export class ConsoleNotifierService implements NotifierService {
  private readonly logger = new Logger(ConsoleNotifierService.name);

  async send(message: string) {
    this.logger.log(message);
  }
}
