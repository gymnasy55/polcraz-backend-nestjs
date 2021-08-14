import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Post as PostModel } from '../posts/posts.model';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {

  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: 'Creation of post' })
  @ApiResponse({ status: 200, type: PostModel })
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(@Body() dto: CreatePostDto,
         @UploadedFile() image) {
    return this.postService.create(dto, image)
  }

}
