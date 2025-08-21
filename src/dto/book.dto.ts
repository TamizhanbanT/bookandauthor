import { z } from "zod";

export const createBookSchema = z.object({
  body: z.object({
    bookName: z.string().min(1, "Book name is required"),
    price: z.number().positive("Price must be a positive number"),
    authorId: z.number(),
  }),
});

export const updateBookSchema = z.object({
  body: z.object({
    bookName: z.string().optional(),
    price: z.number().positive().optional(),
    authorId: z.number().optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, "Invalid book ID"),
  }),
});

export type CreateBookDto = z.infer<typeof createBookSchema>["body"];
export type UpdateBookDto = z.infer<typeof updateBookSchema>["body"];
