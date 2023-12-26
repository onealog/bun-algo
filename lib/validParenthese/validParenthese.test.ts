import { expect, test } from "bun:test";
import refactoring from "./refactoring";

test("valid parentheses test", () => {
  expect(refactoring("()")).toBe(true);
  expect(refactoring("()[]{}")).toBe(true);
  expect(refactoring("(]")).toBe(false);
  expect(refactoring("{[]}")).toBe(true);
  expect(refactoring("((")).toBe(false);
  expect(refactoring("([)]")).toBe(false);
});
