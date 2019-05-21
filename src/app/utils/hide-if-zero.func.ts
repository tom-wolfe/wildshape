import { ValueFormatterParams } from "ag-grid-community";

export function hideIfZero(value: number): string {
  if (!value) { return ''; }
  return String(value);
}

export function zeroFormatter(p: ValueFormatterParams): string {
  return hideIfZero(p.value);
}