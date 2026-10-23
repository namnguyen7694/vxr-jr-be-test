const express = require('express');
const ticketRoutes = require('./routes/ticket.routes');
const paymentRoutes = require('./routes/payment.routes');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/tickets', ticketRoutes);
app.use('/api/payments', paymentRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;
