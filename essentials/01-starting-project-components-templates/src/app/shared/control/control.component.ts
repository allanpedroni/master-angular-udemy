import { Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //NOTE: disable shadow DOM encapsulation for this component
  host: {
    class: 'control' //NOTE: add class to host element, in this case the component itself (app-control)
  }
})
export class ControlComponent {
  label = input.required<string>();
}
