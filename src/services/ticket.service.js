const store = require('../store');

const ticketStatuses = ['PENDING_PAYMENT', 'CONFIRMED'];

function createTicket({ userId, eventId, quantity, unitPrice }) {
  const ticket = {
    id: `ticket-${Date.now()}`,
    userId,
    eventId,
    quantity,
    unitPrice,
    totalAmount: quantity * unitPrice,
    status: 'PENDING_PAYMENT',
    payment: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  store.tickets.set(ticket.id, ticket);
  return ticket;
}

function confirmTicketAfterPayment(ticket, payment) {
  ticket.payment = payment;
  ticket.status = 'CONFIRMED';
  ticket.updatedAt = new Date().toISOString();
  return ticket;
}

function listTickets({ userId, status, page = 1, pageSize = 20 }) {
  let result = Array.from(store.tickets.values());
  if (userId) result = result.filter((ticket) => ticket.userId === userId);
  if (status) result = result.filter((ticket) => ticket.status === status);
  result.sort((first, second) => second.createdAt.localeCompare(first.createdAt));

  const start = (page - 1) * pageSize;
  return {
    data: result.slice(start, start + pageSize),
    total: result.length,
    page,
    pageSize
  };
}

module.exports = { createTicket, confirmTicketAfterPayment, listTickets, ticketStatuses };
