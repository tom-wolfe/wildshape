import { ValueFormatterParams } from "ag-grid-community";

export function titleCase(value: string): string {
  return value.toLowerCase()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function titleCaseFormatter(p: ValueFormatterParams) {
  return titleCase(p.value);
}