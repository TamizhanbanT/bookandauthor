import { Request, Response } from "express";
import * as bookService from "../services/book.service";

export const create = async (req: Request, res: Response) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const bulkCreate = async (req: Request, res: Response) => {
  try {
    const books = await bookService.bulkCreateBooks(req.body);
    res.status(201).json(books);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (_: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const book = await bookService.getBookById(Number(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const book = await bookService.updateBook(Number(req.params.id), req.body);
    res.json(book);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMany = async (req: Request, res: Response) => {
  try {
    const { ids, data } = req.body;
    const result = await bookService.updateManyBooks(ids, data);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const book = await bookService.deleteBook(Number(req.params.id));
    res.json(book);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const removeMany = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body;
    const result = await bookService.deleteManyBooks(ids);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
