import { CommandRunner, SubCommand } from 'nest-commander';
import { InjectConfigstore, Configstore } from 'nest-configstore';
import { red } from 'chalk';
import { FUGLETRADER_API_URL } from './config.constants';

@SubCommand({
  name: 'get',
  arguments: '[key]',
})
export class ConfigGetCommand extends CommandRunner {
  constructor(@InjectConfigstore() private readonly configstore: Configstore) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    const [ key ] = passedParam;
    try {
      if (key !== FUGLETRADER_API_URL) {
        throw new Error(`Invalid config property: ${key}`)
      }
      const value = this.configstore.get(FUGLETRADER_API_URL);
      console.log(`${key}=${value}`);
    } catch (error) {
      console.error(`${red('✖')} ${error.message}`);
      process.exit(1);
    }
  }
}
