// jest.config.cjs
module.exports = {
  testEnvironment: "node",

  // Include both the default [jt]s patterns and .mjs tests
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "**/?(*.)+(spec|test).mjs"],
};
// module.exports = {
//   testEnvironment: "node",

//   // Force Jest to scan ONLY the tests folder (removes any ambiguity)
//   roots: ["<rootDir>/tests"],

//   // Simple, cross‑platform patterns (Jest evaluates these internally)
//   testMatch: ["**/*.test.mjs", "**/*.spec.mjs", "**/*.test.js", "**/*.spec.js"],

//   // Do not transform plain JS; ESM works with our Node flag
//   transform: {},

//   // Be explicit; Windows path rules won't affect these
//   testPathIgnorePatterns: ["/node_modules/"],
// };
