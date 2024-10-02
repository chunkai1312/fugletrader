
import { CommandRunner, SubCommand } from 'nest-commander';
import { InjectConfigstore, Configstore } from 'nest-configstore';
import { red } from 'chalk';
import { FUGLETRADER_API_URL } from './config.constants';

@SubCommand({
  name: 'set',
  arguments: '<key=value>',
})
export class ConfigSetCommand extends CommandRunner {
  constructor(@InjectConfigstore() private readonly configstore: Configstore) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    const [ param = '' ] = passedParam;
    const [ key, value ] = param.split('=');
    try {
      if (key !== FUGLETRADER_API_URL) {
        throw new Error(`Invalid config property: ${key}`)
      }
      this.configstore.set(FUGLETRADER_API_URL, value);
    } catch (error) {
      console.error(`${red('✖')} ${error.message}`);
      process.exit(1);
    }
  }
}
