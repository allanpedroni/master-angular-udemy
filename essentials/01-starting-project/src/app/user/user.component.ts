//signal = allow angular to detect changes in the object
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input() avatar!: string;
  @Input() name!: string;

  public get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
  }
}
