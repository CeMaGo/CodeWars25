function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "unknown value";
  }

  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Division by zero is not allowed.";
      }
      return a / b;
    default:
      return "unknown value";
  }
}
