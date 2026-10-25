import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number().int().positive(),
  DB_NAME: z.string().min(1),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(16),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("Invalid environment configuration");
  console.error(result.error.flatten().fieldErrors);

  process.exit(1);
}

export const env = result.data;
