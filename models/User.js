const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  bitcoin: { type: Number, default: 0 },
  ethereum: { type: Number, default: 0 },
  litecoin: { type: Number, default: 0 }
});

const User = mongoose.model('users', userSchema);
module.exports = { User };
