import { Injectable, signal } from '@angular/core';
//create a wrapper service to hold the messages and let the components subscribe to it
//import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<string[]>([]);

  allMessages = this.messages.asReadonly();

  addMessage(message: string) {
    this.messages.update((prevMessages) => [...prevMessages, message]);
  }
}
