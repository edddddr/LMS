import { Router } from "express";
import {getAllProducts } from "../controllers/product.controllers"

const router = Router();

router.get("/", getAllProduct);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;