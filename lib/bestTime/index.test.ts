import { expect, test } from "bun:test";
import maxProfit from ".";

test("best time to buy and sell stock", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  expect(maxProfit([2, 4, 1])).toBe(2);
  expect(maxProfit([4, 7, 2, 1])).toBe(3);
});
