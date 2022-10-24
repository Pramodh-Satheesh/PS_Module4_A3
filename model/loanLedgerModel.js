const mongoose = require('mongoose');

const loanLedgerSchema = new mongoose.Schema(
{
    paymentAmount: {
        type: Number,
        required: [true, 'The loan installment payment amount must be specified'],
    },
    interest: {
        type: Number,
        required: [true, 'The loan interest field must not be blank']
    },
    principal: {
        type: Number,
        required: [true, 'The loan principal amount field must not be blank']
    },
    createdDate: { 
        type: Date, 
        default: Date.now 
    },
    modifiedDate: { 
        type: Date, 
        default: Date.now 
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    customerID: {
        type: String,
        required: [true, 'The customer ID field must not be blank'],
        minLength: [24, "The customer ID must be of length 24"],
        maxLength: [24, "The customer ID must be of length 24"]
    },
    loanID: {
        type: String,
        required: [true, 'The loan ID field must not be blank'],
        minLength: [24, "The Loan ID must be of length 24"],
        maxLength: [24, "The loan ID must be of length 24"]
    }
});

const LoanLedgers = mongoose.model('LOAN_LEDGER', loanLedgerSchema);

module.exports = LoanLedgers;