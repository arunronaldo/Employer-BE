const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now },
  },
  { versionKey: false }
);

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
