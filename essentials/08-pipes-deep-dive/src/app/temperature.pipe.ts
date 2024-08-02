import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'C' | 'F' = 'C',
    outputType?: 'C' | 'F') {

    if (outputType === undefined) {
      outputType = inputType;
    }

    if (!value) {
      return value;
    }
    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    if (inputType === 'F') {
      value = (value - 32) * 5 / 9;
    } else if (inputType === 'C') {
      value = value * 9 / 5 + 32;
    }
    return `${value.toFixed(2)} °${outputType}`;
  }
}
