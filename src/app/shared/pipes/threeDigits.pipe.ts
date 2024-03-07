import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'threeDigits'
})
export class ThreeDigitsPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().padStart(3, '0');
  }
}
