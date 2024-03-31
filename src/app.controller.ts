import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('test') test: string): string {
    return this.appService.getHello(test);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): string {
    // Call the appService method to create a user using the createUserDto
    return this.appService.createUser(createUserDto);
  }
}
