import { it, describe, expect } from "bun:test";
import { add } from "./calculator.js";

describe("Calculator", () => {
  it("should add correctly", () => {
    const operandA = 1;
    const operandB = 1;
    const actualValue = add(operandA, operandB);
    const expectedValue = 2;
    expect(actualValue).toBe(expectedValue);
  });

  it("should throw an error if string passed on numA parameter", () => {
    const operandA = "5";
    const operandB = 4;
    expect(() => add(operandA, operandB)).toThrow(Error);
  });

  it("should throw an error if string passed on numA parameter", () => {
    const operandA = 5;
    const operandB = "4";
    expect(() => add(operandA, operandB)).toThrow(Error);
  });
});
