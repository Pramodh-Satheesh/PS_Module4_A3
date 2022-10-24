const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'The customer name must not be blank'],
        trim: true,
        minLength: [2, "The name must be of length 2 or more"],
        maxLength: [150, "The name must be of length less than 50"]
    },
    firstName: {
        type: String,
        required: [true, 'The customer first name must not be blank'],
        trim: true,
        minLength: [2, "The first name must be of length 2 or more"],
        maxLength: [50, "The first name must be of length less than 50"]
    },
    middleName: {
        type: String,
        trim: true,
        minLength: [2, "The middle name must be of length 2 or more"],
        maxLength: [50, "The middle name must be of length less than 50"]
    },
    lastName: {
        type: String,
        required: [true, 'The customer last name must not be blank'],
        trim: true,
        minLength: [2, "The last name must be of length 2 or more"],
        maxLength: [50, "The last name must be of length less than 50"]
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'The customer date of birth field must not be blank']
    },
    gender: {
        type: String,
        required: [true, 'The customer gender field must not be blank'],
        enum: ['Male', 'Female', 'Other']
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

const Customers = mongoose.model('CUSTOMER', customerSchema);

module.exports = Customers;