// jest.config.cjs
module.exports = {
  testEnvironment: "node",

  // Include both the default [jt]s patterns and .mjs tests
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "**/?(*.)+(spec|test).mjs"],
};
