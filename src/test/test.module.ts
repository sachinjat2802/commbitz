import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from './schema/test';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }], process.env.MASTER_DB_NAME),
    MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }], process.env.SLAVE_DB_NAME),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
