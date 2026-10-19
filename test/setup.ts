import { existsSync } from "node:fs";

// Load .env locally. Elsewhere (e.g. CI) the variables come from the real environment.
if (existsSync(".env")) {
  process.loadEnvFile();
}
