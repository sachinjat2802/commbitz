import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TestService {

  @InjectModel('Test', 'master') private readonly testModelMaster;
  @InjectModel('Test', 'slave') private readonly testModelSlave;


  create(createTestDto: CreateTestDto) {
    return this.testModelMaster.create(createTestDto);
  }

  findAll() {
    return this.testModelSlave.find().exec();
  }

  findOne(id: string) {
    return this.testModelSlave.findById(id).exec();
  }

  update(id: string, updateTestDto: UpdateTestDto) {
    return this.testModelMaster.updateOne({_id: id}, updateTestDto).exec();
}

  remove(id:string) {
    return this.testModelMaster.deleteOne({_id: id}).exec();
  }
}
