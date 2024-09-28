import { Module } from '@nestjs/common';
import { WebhookCommand } from './webhook.command';
import { WebhookQuestion } from './webhook.question';

@Module({
  providers: [WebhookCommand, WebhookQuestion]
})
export class WebhookModule {}
