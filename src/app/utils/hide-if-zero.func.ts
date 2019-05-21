
export function hideIfZero(value: number): string {
  if (!value) { return ''; }
  return String(value);
}