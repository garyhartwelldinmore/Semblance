import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGO_URI } from './utils';
@Module({
    imports: [
        MongooseModule.forRoot(MONGO_URI),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
