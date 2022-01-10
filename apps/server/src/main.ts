import { NestFactory } from '@nestjs/core';
import { SearchModule } from './search.module';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(SearchModule);
  await app.listen(4000);
}
bootstrap();
