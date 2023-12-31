import { expect, test } from "bun:test";
import singleSwapSort from ".";

test("single swap sort", () => {
  expect(singleSwapSort([3, 2, 1])).toBe(true);
  expect(singleSwapSort([4, 3, 2, 1])).toBe(false);
  expect(singleSwapSort([4, 2, 1])).toBe(true);
  expect(singleSwapSort([1, 3, 5, 9, 10, 11, 15, 13])).toBe(true);
  expect(singleSwapSort([1, 3, 12, 9, 10, 11, 15, 13])).toBe(false);
  expect(singleSwapSort([1, 3, 12, 11, 15])).toBe(true);
});
