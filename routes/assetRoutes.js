const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

// require googleId

// const User = mongoose.model('users');

module.exports = app => {
  // app.post('/api/addsassets', requireLogin, async (req, res) => {
  //   const { bitcoin, ethereum, litecoin } = req.body;
  //
  //   .findByIdAndUpdate(googleId, {$set: {bitcoin: new value, ethereum: new value, litecoin: new value} })
  //   .then(res.send(user) => res.status(204).end())
  //   .catch(err => res.status(500).json({message: 'Internal server error'}));
  //
  // });
};
