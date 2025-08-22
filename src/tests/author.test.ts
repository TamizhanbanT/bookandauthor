import * as authorService from "../services/author.service";
import { prisma } from "../config/prisma";

jest.mock("../../src/config/prisma", () => ({
  prisma: {
    author: {
      create: jest.fn(),
      createMany: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
    },
  },
}));

describe("Author Service", () => {
  const testAuthor = {
    authorId: 1,
    authorName: "Jane Austen",
    books: [],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should create an Author", async () => {
    (prisma.author.create as jest.Mock).mockResolvedValue(testAuthor);

    const result = await authorService.createAuthor({ authorName: "Jane Austen" });
    expect(prisma.author.create).toHaveBeenCalledWith({ data: { authorName: "Jane Austen" } });
    expect(result).toEqual(testAuthor);
  });

  test("should bulk create Authors", async () => {
    (prisma.author.createMany as jest.Mock).mockResolvedValue({ count: 2 });

    const authors = [{ authorName: "Shakespeare" }, { authorName: "R. K. Narayan" }];
    const result = await authorService.bulkCreateAuthors(authors);

    expect(prisma.author.createMany).toHaveBeenCalledWith({ data: authors });
    expect(result).toEqual({ count: 2 });
  });

  test("should get all Authors", async () => {
    (prisma.author.findMany as jest.Mock).mockResolvedValue([testAuthor]);

    const result = await authorService.getAllAuthors();
    expect(prisma.author.findMany).toHaveBeenCalledWith({ include: { books: true } });
    expect(result).toEqual([testAuthor]);
  });

  test("should get Author by ID", async () => {
    (prisma.author.findUnique as jest.Mock).mockResolvedValue(testAuthor);

    const result = await authorService.getAuthorById(1);
    expect(prisma.author.findUnique).toHaveBeenCalledWith({
      where: { authorId: 1 },
      include: { books: true },
    });
    expect(result).toEqual(testAuthor);
  });

  test("should update an Author", async () => {
    const updated = { ...testAuthor, authorName: "Updated" };
    (prisma.author.update as jest.Mock).mockResolvedValue(updated);

    const result = await authorService.updateAuthor(1, { authorName: "Updated" });
    expect(prisma.author.update).toHaveBeenCalledWith({
      where: { authorId: 1 },
      data: { authorName: "Updated" },
    });
    expect(result).toEqual(updated);
  });

  test("should delete an Author", async () => {
    (prisma.author.delete as jest.Mock).mockResolvedValue(testAuthor);

    const result = await authorService.deleteAuthor(1);
    expect(prisma.author.delete).toHaveBeenCalledWith({ where: { authorId: 1 } });
    expect(result).toEqual(testAuthor);
  });

  test("should bulk delete Authors", async () => {
    (prisma.author.deleteMany as jest.Mock).mockResolvedValue({ count: 2 });

    const result = await authorService.deleteManyAuthors([1, 2]);
    expect(prisma.author.deleteMany).toHaveBeenCalledWith({ where: { authorId: { in: [1, 2] } } });
    expect(result).toEqual({ count: 2 });
  });
});
