import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Create an endpoint to get all articles
  //navigate to http://localhost:3000/api/articles to see all articles.
  @Get('api/articles')
  getAllArticles() {
    return ARTICLES;
  }

//Create an endpoint to get a single article by ID
  @Get('api/articles/:id')
  getArticleById(@Param('id') id: string) {
    return ARTICLES.find(article => article._id === id);
  }

}
