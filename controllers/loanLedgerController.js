const LoanLedger = require('./../model/loanLedgerModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');


// Add a new loan ledger
exports.createLedger = async  (req, res) => {
    try {  
      const newLedger = await LoanLedger.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          ledger: newLedger
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };


// Get All Loan ledgers
exports.getAllLedgers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(LoanLedger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const ledgers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: ledgers.length,
      data: {
        ledgers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Get a Specific Loan ledger By ID
exports.getLedger = async (req, res) => {
  try {
    const ledger = await LoanLedger.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        ledger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Change an Existing Loan ledger
exports.updateLedger = async (req, res) => {
  try {
    const ledger = await LoanLedger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        ledger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Delete a Loan ledger
exports.deleteLedger = async (req, res) => {
  try {
    await LoanLedger.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: "Loan ledger successfully deleted"
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};