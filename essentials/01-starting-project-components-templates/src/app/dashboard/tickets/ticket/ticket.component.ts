import { Component, input, signal } from '@angular/core';
import { Ticket } from '../support-tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    // angular will automatically update the view
    this.detailsVisible.update(visible => !visible);
  }
}
