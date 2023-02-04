import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.listen(process.env.HTTP_PORT || 4002, () => {
    logger.log(`Running on ${process.env.HTTP_PORT || 4002}`);
  });
}
bootstrap();
