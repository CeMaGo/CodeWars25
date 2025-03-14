function newAvg(arr, newavg) {
  if (arr.length === 0) {
    if (newavg <= 0) {
      throw new Error("Expected New Average is too low"); // Corrected error message
    }
    return newavg;
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  const expectedSum = newavg * (arr.length + 1);
  const expectedDonation = expectedSum - sum;

  if (expectedDonation <= 0) {
    throw new Error("Expected New Average is too low"); // Corrected error message
  }

  return Math.ceil(expectedDonation);
}
