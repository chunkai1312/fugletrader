import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';
import { DiscordNotifierService } from './discord-notifier.service';
import { NotifierService } from '../notifier.service';
import { Partials } from 'discord.js';

@Module({
  imports: [
    NecordModule.forRoot({
      token: process.env.DISCORD_BOT_TOKEN,
      intents: ['Guilds', 'GuildMessages', 'DirectMessages'],
  })
  ],
  providers: [
    {
      provide: NotifierService,
      useClass: DiscordNotifierService,
    },
  ],
  exports: [
    NotifierService,
  ],
})
export class DiscordNotifierModule {}
