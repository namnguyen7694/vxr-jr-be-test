const store = require('../store');
const {
  createTicket,
  listTickets
} = require('../services/ticket.service');

function list(req, res) {
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 20;
  return res.json(listTickets({
    userId: req.query.userId,
    status: req.query.status,
    page,
    pageSize
  }));
}

function create(req, res) {
  const { userId, eventId, quantity, unitPrice } = req.body;
  if (!userId || !eventId || !Number.isInteger(quantity) || quantity < 1 || typeof unitPrice !== 'number' || unitPrice < 0) {
    return res.status(400).json({ message: 'userId, eventId, quantity and unitPrice are required' });
  }
  return res.status(201).json(createTicket({ userId, eventId, quantity, unitPrice }));
}

function getById(req, res) {
  const ticket = store.tickets.get(req.params.ticketId);
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
  return res.json(ticket);
}

module.exports = { list, create, getById };
