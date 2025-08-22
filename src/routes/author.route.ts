import { Router } from "express";
import * as authorController from "../controllers/author.controller";

import { createAuthorSchema, updateAuthorSchema } from "../dto/author.dto";
import validate from "../middlewares/validate";

const router = Router();

router.post("/", validate(createAuthorSchema), authorController.create);
router.post("/bulk", authorController.bulkCreate);

router.get("/", authorController.getAll);
router.get("/:id", authorController.getById);

router.put("/:id", validate(updateAuthorSchema), authorController.update);


router.delete("/:id", authorController.remove);
router.delete("/bulk/delete", authorController.removeMany);

export default router;
