const express = require('express');
const controller = require('../controllers/payment.controller');

const router = express.Router();
router.post('/tickets/:ticketId', controller.pay);

module.exports = router;
