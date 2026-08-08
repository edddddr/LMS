import { Router } from "express";
import {
    getAllProducts, 
    getProduct
 } from "../controllers/product.controllers"
 
import { asyncHandler } from "../utils/asyncHandler.js"

const router = Router();

router.get("/", asyncHandler(getAllProducts));
router.get("/:id", asyncHandler(getProduct));
// router.post("/", createProduct);
// router.patch("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

export default router;