import { ApiProperty } from "@nestjs/swagger";

export class CreateTestDto {
    @ApiProperty()
    value1: string;

    @ApiProperty()
    value2: string;
}
