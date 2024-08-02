import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  //transform(value: string, ...args: any): string {
  transform(
    value: string | number,
    inputType: 'C' | 'F',
    outputType: 'C' | 'F'): string {

    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    if (inputType === 'F') {
      value = (value - 32) * 5 / 9;
    } else if (inputType === 'C') {
      value = value * 9 / 5 + 32;
    }
    return `${value} °${outputType}`;
  }
}
