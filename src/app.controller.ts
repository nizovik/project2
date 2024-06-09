import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('example')
export class AppController {
  @Post()
  create(): string {
    return 'You made a POST request';
  }

  @Get()
  findAll(): string {
    return 'You made a GET request';
  }

  @Patch()
  update(): string {
    return 'You made a PATCH request';
  }

  @Delete()
  remove(): string {
    return 'You made a DELETE request';
  }
}
