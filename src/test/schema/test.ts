import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Test extends Document {
  @Prop()
  value1: string;

  @Prop()
  value2: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);