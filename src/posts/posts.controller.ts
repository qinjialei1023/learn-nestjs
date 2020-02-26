import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('默认')

export class PostsController {

  @Get()
  @ApiOperation({
    summary: '显示博客列表'
  })
  index() {
    return [11]
  }

  @Post()
  create() {
    return true
  }

  @Get(':id')
  detail() {
    return {
      id: 1,
      title: '111'
    }
  }


}