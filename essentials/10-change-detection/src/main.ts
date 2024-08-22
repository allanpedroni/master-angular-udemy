import { bootstrapApplication } from '@angular/platform-browser';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  //disable zone.js for this angular application
  providers: [provideExperimentalZonelessChangeDetection()]
}).catch((err) => console.error(err));
