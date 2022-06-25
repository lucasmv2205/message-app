import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from './modules/message.module';

@Module({
  imports: [MessageModule, TypeOrmModule.forRoot({
      "database": "./db.sql",
      "type": "sqlite",
      "synchronize": true,
      "entities": ["dist/**/*.model.js"]
  })],
})
export class AppModule {}