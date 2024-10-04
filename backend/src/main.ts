import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/http.exceptions';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.setGlobalPrefix('/'); : back단으로 들어오는 모든것들에 /를 붙여주겠다
    app.setGlobalPrefix('api');

    // 모든 요청을 React 앱으로 라우팅
    app.useStaticAssets(join(__dirname, '..','..', 'ui/dist')); // 리액트 빌드 경로
  // API 요청이 아닌 모든 요청을 React 앱으로 라우팅
  // app.use('*', (req, res, next) => {
  //   if (!req.url.startsWith('/api')) {
  //     res.sendFile(join(__dirname, '..','..', 'ui/dist','index.html'));
  //   } else {
  //     next();
  //   }
  // });
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


// import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './exceptions/http.exceptions';
// import { NestExpressApplication } from '@nestjs/platform-express';
// import { join } from 'path';
// import * as helmet from 'helmet';
// import * as compression from 'compression';

// async function bootstrap() {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
//   app.setGlobalPrefix('api');
//   app.useStaticAssets(join(__dirname, '..','..', 'ui/dist'));

//   app.use(helmet());
//   app.use(compression());

//   app.enableCors({
//     origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   });

//   app.useGlobalFilters(new HttpExceptionFilter());

//   const config = new DocumentBuilder()
//     .setTitle('Simple Board')
//     .setDescription('The Simple Board API description')
//     .setVersion('1.0')
//     .addTag('Board')
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api-docs', app, document);

//   const port = process.env.PORT || 3001;
//   await app.listen(port);
//   console.log(`Application is running on: ${await app.getUrl()}`);
// }

// bootstrap();

// 1. app.use(helmet());
// helmet은 다양한 HTTP 헤더를 설정하여 웹 애플리케이션의 보안을 강화하는 미들웨어
// 기본적인 보안 설정을 자동으로 적용하여 애플리케이션의 보안성을 높이고 다양한 웹 취약점으로부터 애플리케이션을 보호
// 2. app.use(compression());
// compression은 HTTP 응답을 압축하여 전송하는 미들웨어
// 네트워크 대역폭 사용량을 줄이고 페이지 로딩 시간을 단축시켜 사용자 경험을 개선 대용량 데이터 전송 시 효과적
