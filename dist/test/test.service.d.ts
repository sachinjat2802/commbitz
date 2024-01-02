import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
export declare class TestService {
    private readonly testModelMaster;
    private readonly testModelSlave;
    create(createTestDto: CreateTestDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateTestDto: UpdateTestDto): any;
    remove(id: string): any;
}
