import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredText = '';
  //@Output() add = new EventEmitter();
  add = output<{ title: string, text: string }>();

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredText, text: this.enteredText });
    console.log(this.enteredText, this.enteredText);

    // this.form()?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
