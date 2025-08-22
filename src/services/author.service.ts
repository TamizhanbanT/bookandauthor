import { prisma } from "../config/prisma";
import { CreateAuthorDto, UpdateAuthorDto } from "../dto/author.dto";

export const createAuthor = async (data: CreateAuthorDto) => {
  return prisma.author.create({ data });
};

export const bulkCreateAuthors = async (authors: CreateAuthorDto[]) => {
  return prisma.author.createMany({ data: authors });
};

export const getAllAuthors = async () => {
  return prisma.author.findMany({ include: { books: true } });
};

export const getAuthorById = async (id: number) => {
  return prisma.author.findUnique({ where: { authorId: id }, include: { books: true } });
};

export const updateAuthor = async (id: number, data: UpdateAuthorDto) => {
  return prisma.author.update({ where: { authorId: id }, data });
};


export const deleteAuthor = async (id: number) => {
  return prisma.author.delete({ where: { authorId: id } });
};

export const deleteManyAuthors = async (ids: number[]) => {
  return prisma.author.deleteMany({ where: { authorId: { in: ids } } });
};
