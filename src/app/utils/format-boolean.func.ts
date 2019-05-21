import { ValueFormatterParams } from "ag-grid-community";

export function formatBoolean(value: boolean): string {
  return value ? 'Y' : 'N';
}

export function booleanFormatter(p: ValueFormatterParams): string {
  return formatBoolean(p.value);
}