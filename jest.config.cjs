/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/*.test.{ts,tsx}"],
  resolver: "jest-ts-webcompat-resolver",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
