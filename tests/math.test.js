import { expect, test } from "bun:test";
import math from "../lib/math";

test("2 + 2", () => {
  expect(math(2, 2)).toBe(4);
});

test("10 + 20", () => {
  expect(math(10, 20)).toBe(30);
});
