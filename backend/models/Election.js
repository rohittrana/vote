const mongoose = require('mongoose');

const ElectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  candidates: [{ name: String, voteCount: { type: Number, default: 0 } }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Admin
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Election', ElectionSchema);
