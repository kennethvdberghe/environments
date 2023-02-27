import { describe, expect, it } from "vitest";
import { hello } from "./main";

describe("main", () => {
  it("should work", () => {
    // ...
    expect(hello()).toBe("Hello World");
  });
});