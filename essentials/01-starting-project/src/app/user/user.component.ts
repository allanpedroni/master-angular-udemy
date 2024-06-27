//signal = allow angular to detect changes in the object
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required: true}) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter<string>();

  public get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
