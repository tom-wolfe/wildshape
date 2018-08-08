import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cr' })
export class ChallengeRatingPipe implements PipeTransform {
  transform(value: any): any {
    switch (value) {
      case 0.25: return '¼';
      case 0.125: return '⅛';
      default: return String(value);
    }
  }
}