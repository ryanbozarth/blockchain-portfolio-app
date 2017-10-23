const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  investment: { type: Number, default: 0 },
  bitcoin: { type: Number, default: 0 },
  ethereum: { type: Number, default: 0 },
  litecoin: { type: Number, default: 0 }
});

userSchema.virtual('currentValue').get(function() {
  //   const bitcoin = this.bitcoin * bitcoinPrice
  //   const ethereum = this.ethereum * ethereumPrice
  //   const litecoin = this.litecoin * litecoinPrice
  //   const result = bitcoin + ethereum + litecoin
  //   return result;
});

userSchema.virtual('roi').get(function() {});

userSchema.virtual('amountEarned').get(function() {
  //     const result = this.currentValue - this.investment;
  //     return result;
});

userSchema.virtual('daysGain').get(function() {});

const User = mongoose.model('users', userSchema);
module.exports = { User };
