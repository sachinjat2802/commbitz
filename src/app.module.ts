import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { TestModule } from './test/test.module';
import { ConfigModule } from '@nestjs/config';
config();


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MASTER_DB_URL, { connectionName: process.env.MASTER_DB_NAME }),
    MongooseModule.forRoot(process.env.SLAVE_DB_URL, { connectionName: process.env.SLAVE_DB_NAME }),
    TestModule,
  ]
})
export class AppModule {}
