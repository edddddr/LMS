import prisma from "../config/prisma.js";
import { NotFoundError } from "../error/NotFoundError.js"

export const getAllProducts = async (page, limit) => {
    const products = await prisma.product.findMany({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
            createdAt: "desc"
        }
    });
    
    const total = await prisma.product.count();

    const totalPages = Math.ceil(total / limit);

    return {
            products,
            pagination: {
                page,
                limit,
                total,
                totalPages
            }
        }
};






