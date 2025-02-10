export function add(numA, numB) {
  if (typeof numA === "string" || typeof numB === "string") {
    throw new Error("numA should be a number");
  }

  return numA + numB;
}
