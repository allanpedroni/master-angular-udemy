import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { type Ticket } from './support-tickets.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string, text: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map(ticket => {
      if (ticket.id === id){
        //create a new object with the same properties as the ticket object
        //but with the status property set to 'closed'
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
