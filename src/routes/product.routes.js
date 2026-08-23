import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
} from "../controllers/product.controllers";
import { validate } from "../middleware/validate.js";
import { createProductSchema } from "../schemas/product.schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(getProducts));
router.get("/:id", asyncHandler(getProduct));
router.get("/", validate(createProductSchema), asycHandler(createProduct));
// router.post("/", createProduct);
// router.patch("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

export default router;
