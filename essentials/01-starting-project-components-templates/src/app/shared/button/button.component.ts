import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None //disable shadow DOM encapsulation for this component
})
export class ButtonComponent {

}
