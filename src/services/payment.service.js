function createPayment({ ticketId, amount, method = 'MOCK' }) {
  return {
    id: `payment-${Date.now()}`,
    ticketId,
    amount,
    method,
    status: 'PAID',
    paidAt: new Date().toISOString()
  };
}

module.exports = { createPayment };
