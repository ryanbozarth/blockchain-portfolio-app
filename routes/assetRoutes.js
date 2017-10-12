const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const { User } = require('../models/User');

module.exports = app => {
  app.post('/api/addassets', requireLogin, (req, res) => {
    const { bitcoin, ethereum, litecoin, auth_id } = req.body;
    console.log(req.body);
    User.findByIdAndUpdate(
      auth_id,
      {
        $inc: {
          bitcoin: Number(bitcoin),
          ethereum: Number(ethereum),
          litecoin: Number(litecoin)
        }
      },
      { new: true }
    ).then(data => {
      console.log(data);
      res.json(data);
    });
  });
};
