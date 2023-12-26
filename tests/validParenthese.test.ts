import { expect, test } from "bun:test";
import validParentheses from "../lib/validParenthese";

test("valid parentheses test", () => {
  // expect(validParentheses("")).toBe(false);
  expect(validParentheses("()")).toBe(true);
  expect(validParentheses("()[]{}")).toBe(true);
  expect(validParentheses("(]")).toBe(false);
  expect(validParentheses("{[]}")).toBe(true);
  expect(validParentheses("((")).toBe(false);
});
