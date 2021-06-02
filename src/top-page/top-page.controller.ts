import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Get('get/:alias')
  async get(@Param('alias') alias: string): Promise<TopPageModel> {}

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post('find')
  async getByCategory(@Body() dto: FindTopPageDto) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}
}
