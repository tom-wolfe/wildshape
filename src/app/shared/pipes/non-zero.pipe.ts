import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nonZero' })
export class NonZeroPipe implements PipeTransform {
  transform(value: any): any {
    return value > 0 ? String(value) : '';
  }
}