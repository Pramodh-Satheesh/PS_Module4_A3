const express = require('express');
const loanLedgerController = require('../controllers/loanLedgerController');
const router = express.Router();

router
  .route('/')
  .get(loanLedgerController.getAllLedgers)
  .post(loanLedgerController.createLedger);

router
  .route('/:id')
  .get(loanLedgerController.getLedger)
  .put(loanLedgerController.updateLedger)
  .delete(loanLedgerController.deleteLedger);

module.exports = router;