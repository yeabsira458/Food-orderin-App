import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasource: {
    // We use a fallback empty string to satisfy TypeScript,
    // but Prisma will look for the real value in your .env file
    url: process.env.DATABASE_URL || "",
  },
});
