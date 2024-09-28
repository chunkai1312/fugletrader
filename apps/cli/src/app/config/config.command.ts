import { Command, CommandRunner } from 'nest-commander';
import { ConfigGetCommand } from './config-get.command';
import { ConfigSetCommand } from './config-set.command';

@Command({
  name: 'config',
  description: 'configure setting variables',
  subCommands: [ConfigGetCommand, ConfigSetCommand],
})
export class ConfigCommand extends CommandRunner {
  async run(): Promise<void> {
    this.command.outputHelp();
  }
}
