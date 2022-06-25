import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageModel } from 'src/models/message.model';
import { MessageSchema } from 'src/schemas/message.schema';

@Controller('/message')
export class MessageController {
  constructor(
    @InjectRepository(MessageModel) private model: Repository<MessageModel>,
  ) {}

  @Post()
  public async create(@Body() body: MessageSchema): Promise<MessageModel> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MessageModel> {
    const message = await this.model.findOne({ where: { id } });

    if (!message) {
      throw new NotFoundException(`Didn't find a message with id ${id}`);
    }

    return message;
  }

  @Get()
  public async getAll(): Promise<MessageModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: MessageSchema,
  ): Promise<MessageModel> {
    const message = await this.model.findOne({ where: { id } });

    if (!message) {
      throw new NotFoundException(`Didn't find a message with id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const message = await this.model.findOne({ where: { id } });

    if (!message) {
      throw new NotFoundException(`Didn't find a message with id ${id}`);
    }

    await this.model.delete(id);

    return `Message with id ${id} was successfully deleted`;
  }
}