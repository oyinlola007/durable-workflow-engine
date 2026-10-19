import { describe, expect, it } from "vitest";
import { hello } from "../src/hello.js";

describe("hello", () => {
  it("greets by name", () => {
    expect(hello("world")).toBe("hello, world");
  });
});
