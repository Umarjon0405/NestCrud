import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.NODE_PORT || 300;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
bootstrap();
