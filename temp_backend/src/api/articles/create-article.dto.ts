import { Date } from 'mongoose';

export class CreateArticleDto {
  title: string;
  content: string;
  author: string;
  description: string;
  published_date: Date;
  publisher: string;
  updated_date: Date;
}
