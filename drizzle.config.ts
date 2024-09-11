import { type Config } from "drizzle-kit";
import { env } from "~/env";


export default {
  schema: "./src/server/db/schema.ts", // Your schema location
  dialect: "postgresql",
  out: "./drizzle", // Where our migrations will be outputted // PostgreSQL driver
  dbCredentials: {
	host: env.AZURE_DB_HOST,
	user: env.AZURE_DB_USER,
	password: env.AZURE_DB_PASSWORD,
	ssl:"allow",
	database: env.AZURE_DB_NAME,
  }
} satisfies Config;
