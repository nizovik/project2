import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { GetController } from './get/get.controller';
import { GetService } from './get/get.service';
import { PatchController } from './patch/patch.controller';
import { PatchService } from './patch/patch.service';
import { DeleteController } from './delete/delete.controller';
import { DeleteService } from './delete/delete.service';

@Module({
  imports: [],
  controllers: [AppController, PostController, GetController, PatchController, DeleteController],
  providers: [AppService, PostService, GetService, PatchService, DeleteService],
})
export class AppModule {}
