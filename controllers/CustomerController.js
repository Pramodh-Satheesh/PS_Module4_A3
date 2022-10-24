const Customer = require('./../model/customerModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');


// Add a new customer
exports.createCustomer = async  (req, res) => {
    try {  
      const newCustomer = await Customer.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          customer: newCustomer
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };


// Get All customers
exports.getAllCustomers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Customer.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Get a Specific customer By ID
exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Change an Existing customer record
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// Delete a customer
exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: "Customer record deleted successfully"
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};