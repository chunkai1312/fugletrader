import { CommandFactory } from 'nest-commander';
import { AppModule } from './app/app.module';

const version = require('../package.json').version;

async function bootstrap() {
  await CommandFactory.run(AppModule, { version });
}

bootstrap();
