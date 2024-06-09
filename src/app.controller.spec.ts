import { Module } from '@nestjs/common';
import { ExampleController } from './app.controller';
@Module({
  controllers: [ExampleController],
})
export class AppModule {}
