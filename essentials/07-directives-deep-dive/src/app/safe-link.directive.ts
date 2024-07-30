import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onComfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {

  queryParam = input('myapp', { alias: 'appSafeLink'});

  constructor() {
    console.log('SafeLinkDirective created');
  }

  onComfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Are you sure you want to leave this page?');

    if (wantsToLeave)
    {
      const target = event.target as HTMLAnchorElement;
      const address = target.href;

      target.href = `${address}?myapp=${this.queryParam()}`; // append query param to the

      address
      return true;
    }

    event.preventDefault();
    return false;
  }
}
