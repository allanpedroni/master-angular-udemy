import { Component, DestroyRef, inject, OnInit } from '@angular/core';

import { interval } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    //every second, log a message to the console
    const subscriptionInterval = interval(1000).subscribe({
      next: () => { console.log('I am a standalone component'); },
      complete: () => { console.log('This is how you can create a standalone component in Angular'); },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });

    //destroy the subscription when the component is destroyed
    this.destroyRef.onDestroy(() => {
      subscriptionInterval.unsubscribe();
    });
  }
}
