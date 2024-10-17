import { Injectable } from '@nestjs/common';
import { InjectLineNotify, LineNotify } from 'nest-line-notify';
import { NotifierService } from '../notifier.service';

@Injectable()
export class LineNotifyNotifierService implements NotifierService {
  constructor(
    @InjectLineNotify() private readonly lineNotify: LineNotify,
  ) {}

  async send(message: string) {
    return this.lineNotify.send({ message });
  }
}
