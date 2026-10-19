import postgres from "postgres";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set. Copy .env.example to .env.`);
  }
  return value;
}

// Reads the same POSTGRES_* variables docker-compose.yml uses, so each value lives in one place.
export function createDb() {
  return postgres({
    host: process.env.POSTGRES_HOST ?? "localhost",
    port: Number(requireEnv("POSTGRES_PORT")),
    user: requireEnv("POSTGRES_USER"),
    password: requireEnv("POSTGRES_PASSWORD"),
    database: requireEnv("POSTGRES_DB"),
  });
}
