import prisma from "../config/prisma.js";
import { NotFoundError } from "../error/NotFoundError.js";
import { ConflictError } from "../errors/ConflictError.js";
import { generateSlug } from "../utils/slug.js";

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

export const getProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  return product;
};

export const createProductService = async (data) => {
  const existingProduct = await prisma.product.findUnique({
    where: {
      sku: data.sku,
    },
  });

  if (existingProduct) {
    throw new ConflictError("SKU already exists");
  }

  const baseSlug = generateSlug(data.name);

  let slug = baseSlug;
  let counter = 1;

  while (
    await prisma.product.findUnique({
      where: { slug },
    })
  ) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  const product = await prisma.product.create({
    data: {
      ...data,
      slug,
    },
  });

  return product;
};
