<<<<<<< HEAD
import { ValueFormatterParams } from "ag-grid-community";

=======
>>>>>>> Remove NGRX
export function titleCase(value: string): string {
  return value.toLowerCase()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
<<<<<<< HEAD
}

export function titleCaseFormatter(p: ValueFormatterParams) {
  return titleCase(p.value);
=======
>>>>>>> Remove NGRX
}