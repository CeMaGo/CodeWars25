function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
    return "Invalid input: Array must contain 10 integers.";
  }

  const areaCode = numbers.slice(0, 3).join("");
  const prefix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6, 10).join("");

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
