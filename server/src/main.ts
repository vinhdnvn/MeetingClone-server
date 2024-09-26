import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const config = new DocumentBuilder()
  //   .setTitle('API')
  //   .setDescription('API description')
  //   .setVersion('1.0')
  //   .addTag('API')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('swagger', app, document, {
  //   jsonDocumentUrl: '/swagger-json',
  // });
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
