//signal = allow angular to detect changes in the object
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({required: true}) selected: boolean = false;
  @Output() select = new EventEmitter<string>();

  public get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
