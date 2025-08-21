import { Router } from "express";
import * as bookController from "../controllers/book.controller";
import validate from "../middlewares/validate";
import { createBookSchema, updateBookSchema } from "../dto/book.dto";

const router = Router();

router.post("/", validate(createBookSchema), bookController.create);
router.post("/bulk", bookController.bulkCreate);

router.get("/", bookController.getAll);
router.get("/:id", bookController.getById);

router.put("/:id", validate(updateBookSchema), bookController.update);
router.put("/bulk/update", bookController.updateMany);

router.delete("/:id", bookController.remove);
router.delete("/bulk/delete", bookController.removeMany);

export default router;
