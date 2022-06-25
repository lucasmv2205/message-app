import { IsString, MaxLength, IsEmail } from 'class-validator';

export class MessageSchema {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsString()
  @MaxLength(800)
  message: string;

  @IsString()
  @IsEmail()
  @MaxLength(255)
  email: string;
}