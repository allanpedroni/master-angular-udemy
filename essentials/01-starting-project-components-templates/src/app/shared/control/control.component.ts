import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, ViewEncapsulation, afterNextRender, afterRender, contentChild, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //NOTE: disable shadow DOM encapsulation for this component
  host: {
    class: 'control', //NOTE: add class to host element, in this case the component itself (app-control)
    '(click)': 'onClick()', //NOTE: add role attribute to host element
  }
})
export class ControlComponent implements AfterContentInit {
  //add a property to your component class
  //just exists for backward compatibility, not used in this example.
  //use host: { class: 'control' } instead
  //@HostBinding('class') className = 'control';

  //add an event listener to your component class
  //just exists for backward compatibility, not used in this example.
  //use host: { '(click)': 'onClick()' } instead
  //@HostListener('click', ['onClick()'])

  //use @ContentChild to get a reference to the input element though the ng-content template
  //@ContentChild('input') private control: ElementRef<HTMLInputElement | HTMLTextAreaElement> | undefined;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  label = input.required<string>();

  constructor() {
    // use afterRender and afterNextRender to get the control reference when a change happens anywhere
    afterRender(() => {
      console.log('afterRender');
      //console.log(this.control());
    });

    afterNextRender(() => {
      console.log('afterNextRender');
      //console.log(this.control());
    });
  }

  //angular will inject the element reference of the host element,
  //and give access to it via the el property
  private el = inject(ElementRef);

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    //console.log(this.control());
  }

  onClick() {
    console.log('clicked!');
    //console.log(this.el); //
    //console.log(this.control());
  }
}
