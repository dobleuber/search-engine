import { Body, Controller, Get, Post, HttpException, Param } from '@nestjs/common';
import { SearchService } from './search.service';

import { SearchItem, Prisma } from '@prisma/client';

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/search/:query')
  search(@Param('query') query: string): Promise<SearchItem[]> {
    return this.searchService.search(query);
  }

  @Get('/search/:id/details')
  async getSearchItem(@Param('id') id: string): Promise<SearchItem> {
    try {
      return await this.searchService.getSearchItem({ id });
    } catch (error) {
      throw new HttpException('Search item not found', 404);
    }
  }

  @Post('/search')
  async createSearchItem(@Body() args: Prisma.SearchItemCreateInput): Promise<SearchItem> {
    return this.searchService.createSearchItem(args);
  }

  @Get('/')
  getHello(): string {
    return this.searchService.getHello();
  }
}
