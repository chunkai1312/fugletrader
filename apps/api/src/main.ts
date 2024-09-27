import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SessionBuilder } from '@ngrok/ngrok';
import { AppModule } from './app/app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(port);
  Logger.log(`🚀 Application is running on port ${port}`);

  if (process.env.NGROK_ENABLED === 'true') {
    const session = await new SessionBuilder().authtokenFromEnv().connect();
    const listener = await session.httpEndpoint().listen();
    Logger.log(`⏩ Ingress established at ${listener.url()}`);
    listener.forward(`localhost:${port}`);
  }
}

bootstrap();
