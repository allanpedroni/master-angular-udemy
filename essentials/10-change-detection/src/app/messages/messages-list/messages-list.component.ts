import { ChangeDetectionStrategy, ChangeDetectorRef, DestroyRef, Component, inject, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {

  private messagesService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.messagesService.messages$.subscribe((messages) => {
      this.messages = messages;
      //mark the component to be checked by the change detection
      this.cdRef.markForCheck();
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      console.log('[MessagesList] "onDestroy" hook called.');
    });
  }

  messages: string[] = [];

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
