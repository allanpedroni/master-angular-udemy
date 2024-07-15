import { Component, HostBinding, HostListener, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //NOTE: disable shadow DOM encapsulation for this component
  host: {
    class: 'control', //NOTE: add class to host element, in this case the component itself (app-control)
    //'(click)': 'onClick()', //NOTE: add role attribute to host element
  }
})
export class ControlComponent {
  //add a property to your component class
  //just exists for backward compatibility, not used in this example.
  //use host: { class: 'control' } instead
  //@HostBinding('class') className = 'control';

  //add an event listener to your component class
  //just exists for backward compatibility, not used in this example.
  //use host: { '(click)': 'onClick()' } instead
  //@HostListener('click', ['onClick()'])

  label = input.required<string>();

  // onClick() {
  //   console.log('clicked!');
  // }
}
