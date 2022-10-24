const Loan = require('./../model/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');


// Add a new loan
exports.createLoan = async  (req, res) => {
    try {  
      const newLoan = await Loan.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          loan: newLoan
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };


// Get All Loans
exports.getAllLoans =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loans.length,
      data: {
        loans
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Get a Specific Loan By ID
exports.getLoan = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        loan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Change an Existing Loan
exports.updateLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Delete a Loan
exports.deleteLoan = async (req, res) => {
  try {
    await Loan.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: "Loan successfully deleted"
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};