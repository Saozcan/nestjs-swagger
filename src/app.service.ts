import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './app.dto';

@Injectable()
export class AppService {
  createUser(createUserDto: CreateUserDto): string {
    return `User created with email: ${createUserDto.email}`;
  }
  getHello(input: string): string {
    return `Hello World! ${input}`;
  }
}
