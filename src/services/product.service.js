import prisma from "../config/prisma.js";
import { NotFoundError } from "../error/NotFoundError.js"

export const getAllProducts = async () => {
    const product = await prisma.product.findMany();

    if (!product) {
        throw new NotFoundError("Product not found");
    }

    return product;
};


