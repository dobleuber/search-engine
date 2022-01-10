import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './search.controller';

import { PrismaService } from './prisma.service';
import { SearchService } from './search.service';

describe('AppController', () => {
  let searchController: SearchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [SearchService, PrismaService],
    }).compile();

    searchController = app.get<SearchController>(SearchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(searchController.getHello()).toBe('Hello World!');
    });
  });
});
