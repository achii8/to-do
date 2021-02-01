import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import {Cors} from "cors";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(Cors);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
