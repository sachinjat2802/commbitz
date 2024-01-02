"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let TestService = class TestService {
    create(createTestDto) {
        return this.testModelMaster.create(createTestDto);
    }
    findAll() {
        return this.testModelSlave.find().exec();
    }
    findOne(id) {
        return this.testModelSlave.findById(id).exec();
    }
    update(id, updateTestDto) {
        return this.testModelMaster.updateOne({ _id: id }, updateTestDto).exec();
    }
    remove(id) {
        return this.testModelMaster.deleteOne({ _id: id }).exec();
    }
};
exports.TestService = TestService;
__decorate([
    (0, mongoose_1.InjectModel)('Test', 'master'),
    __metadata("design:type", Object)
], TestService.prototype, "testModelMaster", void 0);
__decorate([
    (0, mongoose_1.InjectModel)('Test', 'slave'),
    __metadata("design:type", Object)
], TestService.prototype, "testModelSlave", void 0);
exports.TestService = TestService = __decorate([
    (0, common_1.Injectable)()
], TestService);
//# sourceMappingURL=test.service.js.map