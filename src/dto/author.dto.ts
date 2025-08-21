import { z } from "zod";

export const createAuthorSchema = z.object({
  body: z.object({
    authorName: z.string().min(2, "Author name must be at least 2 characters"),
  }),
});

export const updateAuthorSchema = z.object({
  body: z.object({
    authorName: z.string().min(2).optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, "Invalid author ID"),
  }),
});

export type CreateAuthorDto = z.infer<typeof createAuthorSchema>["body"];
export type UpdateAuthorDto = z.infer<typeof updateAuthorSchema>["body"];
