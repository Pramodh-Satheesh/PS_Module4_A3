// 3) ROUTES
const express = require('express');
const morgan = require('morgan');

const loanRouter = require('./routes/loanRoutes')
const customerRouter = require('./routes/customerRoutes')
const loanLedgerRouter = require('./routes/loanLedgerRoutes')

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/loans', loanRouter);
app.use('/api/v1/customers', customerRouter);
app.use('/api/v1/loanledgers', loanLedgerRouter);

module.exports = app;