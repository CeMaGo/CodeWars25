function duplicateCount(text) {
  const charCounts = {};
  const lowerText = text.toLowerCase();
  let duplicateCount = 0;

  for (const char of lowerText) {
    if (/[a-z0-9]/.test(char)) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  }
  for (const count of Object.values(charCounts)) {
    if (count > 1) {
      duplicateCount++;
    }
  }
  return duplicateCount;
}
