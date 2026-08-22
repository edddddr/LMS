import prisma from "../config/prisma.js";
import { NotFoundError } from "../error/NotFoundError.js";

export const getAllProducts = async (page, limit) => {
  const [products, total] = await Promise.all([
    prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.product.count(),
  ]);

  const totalPages = Math.ceil(total / limit);

  if (total > 0 && page > totalPages) {
    throw new NotFoundError("Page not found");
  }

  return {
    products,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
};
