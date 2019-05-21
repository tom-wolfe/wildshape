export function challengeRating(value: any): string {
  switch (value) {
    case 0.25: return '¼';
    case 0.125: return '⅛';
    default: return String(value);
  }
}