import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../support-tickets.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    // angular will automatically update the view
    this.detailsVisible.update(visible => !visible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
