import { Module } from '@nestjs/common';
import { ConfigCommand } from './config.command';
import { ConfigGetCommand } from './config-get.command';
import { ConfigSetCommand } from './config-set.command';

@Module({
  imports: [ConfigCommand, ConfigGetCommand, ConfigSetCommand],
})
export class ConfigModule {}
