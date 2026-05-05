import mut from "./module.js";

test("sum adds two numbers", () => {
  expect(mut.sum(12, 18)).toBe(30);
});

test("div divides two numbers", () => {
  expect(mut.div(10, 2)).toBe(5);
});

test("div returns decimal result", () => {
  expect(mut.div(5, 2)).toBe(2.5);
});

test("div by zero returns Infinity", () => {
  expect(mut.div(10, 0)).toBe(Infinity);
});

test("containsNumbers returns true when string contains digits", () => {
  expect(mut.containsNumbers("abc123")).toBe(true);
});

test("containsNumbers returns false when string has no digits", () => {
  expect(mut.containsNumbers("hello")).toBe(false);
});

test("containsNumbers returns false for empty string", () => {
  expect(mut.containsNumbers("")).toBe(false);
});

test("containsNumbers returns false for spaces only", () => {
  expect(mut.containsNumbers("   ")).toBe(false);
});

test("containsNumbers returns true when digit is zero", () => {
  expect(mut.containsNumbers("room0")).toBe(true);
});