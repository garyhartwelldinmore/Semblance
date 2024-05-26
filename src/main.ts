import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as exphbs from 'express-handlebars';
import { AppModule } from './app.module';

async function bootstrap() {
    // const app = await NestFactory.create(AppModule);
    // app.enableCors({
    //     origin: true,
    //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    //     credentials: true
    // });
    // app.setGlobalPrefix('graphql');
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // 配置模板引擎
    app.useStaticAssets(join(__dirname, '..', 'views'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');

    await app.listen(3000);
}
bootstrap();
