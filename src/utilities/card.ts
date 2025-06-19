export function getDifficultyClass(diff: string): string {
  switch (diff.toLowerCase()) {
    case "1":
      return 'Machine-Level';
    case "2":
      return 'Low-Level';
    case "3":
      return 'Mid-Level';
    case "4":
      return 'High-Level';
    case "5":
      return 'Very-High-Level';
    default:
      return 'unknown';
  }
}