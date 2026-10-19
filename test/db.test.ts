import { afterAll, describe, expect, it } from "vitest";
import { createDb } from "../src/db.js";

const sql = createDb();

afterAll(async () => {
  await sql.end();
});

describe("database", () => {
  it("answers a query", async () => {
    const rows = await sql<{ ok: number }[]>`select 1 as ok`;
    expect(rows[0]?.ok).toBe(1);
  });
});
