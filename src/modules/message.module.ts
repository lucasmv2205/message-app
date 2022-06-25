import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageController } from 'src/controllers/message.controller';
import { MessageModel } from 'src/models/message.model';

@Module({
  imports: [TypeOrmModule.forFeature([MessageModel])],
  controllers: [MessageController],
})
export class MessageModule {}