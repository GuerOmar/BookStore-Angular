import { BookModel } from '@/models';

export const mockBooks: BookModel[] = [{
  id: 1,
  title: 'TITLE1',
  author: 'AUTHOR1',
  resume: 'RESUME1'
}, {
  id: 2,
  title: 'TITLE2',
  author: 'AUTHOR2',
  resume: 'RESUME2'
}];

export const mockBook = mockBooks[0];
