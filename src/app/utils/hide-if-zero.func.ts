<<<<<<< HEAD
import { ValueFormatterParams } from "ag-grid-community";
=======
>>>>>>> Remove NGRX

export function hideIfZero(value: number): string {
  if (!value) { return ''; }
  return String(value);
<<<<<<< HEAD
}

export function zeroFormatter(p: ValueFormatterParams): string {
  return hideIfZero(p.value);
=======
>>>>>>> Remove NGRX
}