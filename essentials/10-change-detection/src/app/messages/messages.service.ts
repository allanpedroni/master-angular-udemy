import { Injectable } from '@angular/core';
//create a wrapper service to hold the messages and let the components subscribe to it
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages$ = new BehaviorSubject<string[]>([]);
  private messages: string[] = [];

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];
    this.messages$.next([...this.messages]);
  }
}
