import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './server/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/27017'), UserModule], // 连接本地服务器，添加用户module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
