const reverse = require("./reverse.js");


test("reverse string hello expected olleh", () => {
  expect(reverse.one("hello")).toEqual("olleh");
});

test("reverse string hello expected olleh", () => {
  expect(reverse.two("hello")).toEqual("olleh");
});

test("reverse string hello expected olleh", () => {
  expect(reverse.three("hello")).toBe("olleh");
});

test("reverse string hello expected olleh", () => {
  expect(reverse.four("hello")).toBe("olleh");
});
