const express = require('express');
const controller = require('../controllers/ticket.controller');

const router = express.Router();
router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:ticketId', controller.getById);

module.exports = router;
