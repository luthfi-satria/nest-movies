import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.listen(process.env.HTTP_PORT || 5000, () => {
    logger.log(`Running on ${process.env.HTTP_PORT || 5000}`);
  });
}
bootstrap();
