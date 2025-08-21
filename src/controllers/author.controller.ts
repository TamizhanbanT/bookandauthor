import { Request, Response } from "express";
import * as authorService from "../services/author.service";

export const create = async (req: Request, res: Response) => {
  try {
    const author = await authorService.createAuthor(req.body);
    res.status(201).json(author);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const bulkCreate = async (req: Request, res: Response) => {
  try {
    const authors = await authorService.bulkCreateAuthors(req.body);
    res.status(201).json(authors);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (_: Request, res: Response) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const author = await authorService.getAuthorById(Number(req.params.id));
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const author = await authorService.updateAuthor(Number(req.params.id), req.body);
    res.json(author);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMany = async (req: Request, res: Response) => {
  try {
    const { ids, data } = req.body;
    const result = await authorService.updateManyAuthors(ids, data);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const author = await authorService.deleteAuthor(Number(req.params.id));
    res.json(author);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const removeMany = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body;
    const result = await authorService.deleteManyAuthors(ids);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
