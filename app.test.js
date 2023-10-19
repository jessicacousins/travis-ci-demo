const message = require("./app");

test('message should equal "Hello, World!"', () => {
  expect(message).toEqual("Hello, World!");
});
