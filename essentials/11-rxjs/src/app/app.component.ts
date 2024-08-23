import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

import { interval, map } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  //Observable
  //  - great for managing events & streams of data
  //  - values over time

  //Signal
  //  - great for managing state & reactivity
  //  - values in a container

  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  interval = signal(0);
  doubleInterval = computed(() => this.interval() * 2);
  constructor() {
    effect(() => {
      console.log('Click count changed to ' + this.clickCount());
    });
  }

  ngOnInit(): void {

    setInterval(() => {
      this.interval.update(previuesValue => previuesValue + 1);
    }, 1000);

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
