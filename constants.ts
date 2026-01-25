
import { Book } from './types';
import booksData from './src/fixtures/books.json';

// Load books from fixture so each book can carry its own reviews and meetings
export const BOOKS: Book[] = booksData as unknown as Book[];

export function getBookById(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id);
}
