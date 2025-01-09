const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'voter' }, // 'voter' or 'admin'
  walletAddress: { type: String, unique: true }, // Blockchain Wallet Address
});

module.exports = mongoose.model('User', UserSchema);
