const mongoose = require('mongoose');

const IPCSchema = mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

module.exports = IPCCode = mongoose.model('IPCCode', IPCSchema);
