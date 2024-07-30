import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onComfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective created');
  }

  onComfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Are you sure you want to leave this page?');

    if (wantsToLeave)
    {
      return true;
    }

    event.preventDefault();
    return false;
  }
}
