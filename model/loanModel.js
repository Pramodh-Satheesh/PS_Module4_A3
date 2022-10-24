const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
{
    loanType: {
        type: String,
        required: [true, 'The loan type must be specified'],
        trim: true,
        enum: ['Home', 'Auto', 'Boat', 'Life']
    },
    loanNumber: {
        type: Number,
        required: [true, 'The loan number must be specified'],
        unique: true,
        validate: {
            validator: function(val) {
                if(val.toString().length != 10){
                    return "Loan number be a 10 digit number";
                }
            }
        }
    },
    amount: {
        type: Number,
        required: [true, 'The loan amount field must not be blank']
    },
    interestRate: {
        type: Number,
        required: [true, 'The loan interest field must not be blank']
    },
    loanTerm: {
        type: Number,
        required: [true, 'The loan term field must not be blank']
    },
    startDate: {
        type: Date,
        required: [true, 'The loan start date must not be blank']
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
    }
});

const Loans = mongoose.model('LOAN', loanSchema);

module.exports = Loans;