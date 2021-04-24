import { intersperse } from "../index.js";

test("works properly", () => {
  expect(intersperse([1, 2, 3], 0)).toStrictEqual([1, 0, 2, 0, 3]);
});
