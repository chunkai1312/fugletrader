import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SessionBuilder } from '@ngrok/ngrok';
import { AppModule } from './app/app.module';
import { Notifier } from './app/notifier';

const port = parseInt(process.env.APP_PORT, 10) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.register({ notifier: process.env.NOTIFIER_SERVICE as Notifier })
  );
  app.setGlobalPrefix('api');
  await app.listen(port);
  Logger.log(`🚀 Application is running on port ${port}`);

  if (process.env.NGROK_ENABLED === 'true') {
    await setupNgrok(port);
  }
}

async function setupNgrok(port: number) {
  const session = await new SessionBuilder().authtokenFromEnv().connect();
  const listener = await session.httpEndpoint().listen();
  Logger.log(`⏩ Ingress established at ${listener.url()}`);
  listener.forward(`localhost:${port}`);
}

bootstrap();
