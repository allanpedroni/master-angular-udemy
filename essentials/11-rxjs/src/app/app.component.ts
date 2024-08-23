import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

import { interval, map } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);

  constructor() {
    effect(() => {
      console.log('Click count changed to ' + this.clickCount());
    });
  }

  ngOnInit(): void {
    // //every second, log a message to the console
    // const subscriptionInterval =
    //   interval(1000)
    //     .pipe
    //     (
    //       map((value) => value * 2)
    //     )
    //     .subscribe
    //     ({
    //       next: (val) => { console.log(`I am a standalone component: ${val}`); },
    //       complete: () => { console.log('This is how you can create a standalone component in Angular'); },
    //       error: (err) => { console.error('An error occurred:', err); },
    //     });

    // //destroy the subscription when the component is destroyed
    // this.destroyRef.onDestroy(() => {
    //   subscriptionInterval.unsubscribe();
    // });
  }

  onClick() {
    this.clickCount.update(previuesValue => previuesValue + 1);
  }
}
