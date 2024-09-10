import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/http.exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('/'); : back단으로 들어오는 모든것들에 /를 붙여주겠다
    app.setGlobalPrefix('/');
    // CORS 활성화
    app.enableCors({
      origin: '*', // 모든 출처 허용, 특정 출처로 제한할 수 있음
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 허용할 HTTP 메서드
      credentials: true, // 쿠키와 같은 자격증명 허용
    });
  // 직접만든 ExceptionFilter를 사용하기 위해 useGlobalFilters()에 new HttpExceptionFilter()를 등록
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
  .setTitle('Simple Board')
  .setDescription('The Simple Board API description')
  .setVersion('1.0')
  .addTag('Board')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api1', app, document);

  await app.listen(3001);
}
bootstrap();
