// dependencies
let mongoose = require('mongoose');
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let SurgerySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is Required'
  },
  phone: {
    type: String,
    trim: true,
    required: 'Phone is Required'
  },
  mobilePhone: {
    type: String,
    trim: true,
    required: 'Phone is Required'
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

});

// This creates our model from the above schema, using mongoose's model method
var Surgery = mongoose.model('surgeries', SurgerySchema);

// Export the model
module.exports = Surgery;