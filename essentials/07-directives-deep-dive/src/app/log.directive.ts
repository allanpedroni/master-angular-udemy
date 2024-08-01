import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()'
  }
})
export class LogDirective {
  constructor(private elementRef: ElementRef) { }

  onLog() {
    console.log('CLICKED...');
    console.log(this.elementRef.nativeElement);
  }
}
