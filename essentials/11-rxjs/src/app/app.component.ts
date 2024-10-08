import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map, Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0});

  customIntervals$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value....');
      subscriber.next({message: 'New value'});
      timesExecuted++;
    }, 2000)
  });

  //interval = signal(0);
  //doubleInterval = computed(() => this.interval() * 2);

  private destroyRef = inject(DestroyRef);

  //Observable
  //  - great for managing events & streams of data
  //  - values over time

  //Signal
  //  - great for managing state & reactivity
  //  - values in a container

  constructor() {
    // effect(() => {
    //   console.log('Click count changed to ' + this.clickCount());
    // });
  }

  ngOnInit(): void {

    this.customIntervals$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Custom interval completed successfully'),
    });

    const clickCountSubscription = this.clickCount$.subscribe({
      next: (value) => console.log(`Clicked button ${value} times.`),
    });

    this.destroyRef.onDestroy(() => {
      clickCountSubscription.unsubscribe();
      console.log('Unsubscribed from click count subscription');
    });

    // setInterval(() => {
    //   this.interval.update(previuesValue => previuesValue + 1);
    // }, 1000);

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
