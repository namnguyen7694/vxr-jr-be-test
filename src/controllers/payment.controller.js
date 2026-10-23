const store = require('../store');
const { createPayment } = require('../services/payment.service');
const { confirmTicketAfterPayment } = require('../services/ticket.service');

function pay(req, res) {
  const ticket = store.tickets.get(req.params.ticketId);
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

  const payment = createPayment({
    ticketId: ticket.id,
    amount: ticket.totalAmount,
    method: req.body.method
  });
  return res.json(confirmTicketAfterPayment(ticket, payment));
}

module.exports = { pay };
