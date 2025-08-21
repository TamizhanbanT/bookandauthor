import { prisma } from "../config/prisma";
import { CreateBookDto, UpdateBookDto } from "../dto/book.dto";

export const createBook = async (data: CreateBookDto) => {
  return prisma.book.create({ data });
};

export const bulkCreateBooks = async (books: CreateBookDto[]) => {
  return prisma.book.createMany({ data: books });
};

export const getAllBooks = async () => {
  return prisma.book.findMany({ include: { author: true } });
};

export const getBookById = async (id: number) => {
  return prisma.book.findUnique({ where: { bookId: id }, include: { author: true } });
};

export const updateBook = async (id: number, data: UpdateBookDto) => {
  return prisma.book.update({ where: { bookId: id }, data });
};

export const updateManyBooks = async (ids: number[], data: UpdateBookDto) => {
  return prisma.book.updateMany({ where: { bookId: { in: ids } }, data });
};

export const deleteBook = async (id: number) => {
  return prisma.book.delete({ where: { bookId: id } });
};

export const deleteManyBooks = async (ids: number[]) => {
  return prisma.book.deleteMany({ where: { bookId: { in: ids } } });
};
