import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),

  description: z.string().optional(),

  price: z.coerce.number().positive("Price must be greater than 0"),

  stock: z.coerce.number().int().min(0, "Stock cannot be negative"),

  sku: z.string().trim().min(1, "SKU is required"),

  imageUrl: z.string().url().optional(),

  categoryId: z.string().uuid("Invalid category ID"),
});
