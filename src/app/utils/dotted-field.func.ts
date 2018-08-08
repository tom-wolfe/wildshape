export function dottedField(field: string): any {
  return (o: any) => field.split('.').reduce((c, f) => c[f], o);
}