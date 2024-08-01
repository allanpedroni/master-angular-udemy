//directive is a class that can modify the structure or behavior of elements in the DOM.

import { Directive, ElementRef, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onComfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {

  queryParam = input('myapp', { alias: 'appSafeLink'});

  constructor(private hostElementRef: ElementRef<HTMLAnchorElement>) {
    console.log('SafeLinkDirective created');
  }

  onComfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Are you sure you want to leave this page?');

    console.log(this.hostElementRef.nativeElement);

    if (wantsToLeave)
    {
      const target = this.hostElementRef.nativeElement;
      //const target = event.target as HTMLAnchorElement;
      const address = target.href;

      target.href = `${address}?myapp=${this.queryParam()}`; // append query param to the

      address
      return true;
    }

    event.preventDefault();
    return false;
  }
}
