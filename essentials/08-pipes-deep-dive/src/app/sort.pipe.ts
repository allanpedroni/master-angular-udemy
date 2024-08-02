import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false // This pipe is impure and needs to be re-evaluated on every change detection cycle
              // It can impact performance, so use it with caution
})
export class SortPipe implements PipeTransform {

  transform(
    value: string[] | number[],
    direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else if (direction === 'desc') {
        return a < b ? 1 : -1;
      }
      return 0;
    })
    return sorted;
  }
}
