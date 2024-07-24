import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { type Ticket } from './support-tickets.model';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];
}
