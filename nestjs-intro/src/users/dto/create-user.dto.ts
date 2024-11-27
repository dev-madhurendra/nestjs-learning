import { IsEmail, IsEnum, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { Role } from '../enums/users.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role, { message: 'Valid role required.' })
  role: Role;
}
