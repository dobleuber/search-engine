import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, SearchItem, } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}
  async search(query: string): Promise<SearchItem[]> {
    return this.prisma.searchItem.findMany({
      where: {
        title: {
          contains: query,
        },
      },
    });
  }

  async getSearchItem(where: Prisma.SearchItemWhereUniqueInput): Promise<SearchItem> {
    return this.prisma.searchItem.findUnique({
      where
    });
  }

  async createSearchItem(args: Prisma.SearchItemCreateInput) {
    const { title, photo, description, shortDescription } = args;
    return this.prisma.searchItem.create({
      data: {
        title,
        photo,
        description,
        shortDescription,
      },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
