const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const { User } = require('../models/User');

module.exports = app => {
  app.post('/api/addassets', requireLogin, (req, res) => {
    const { investment, bitcoin, ethereum, litecoin, auth_id } = req.body;
    console.log(req.body);
    User.findByIdAndUpdate(
      auth_id,
      {
        $inc: {
          investment: Number(investment),
          bitcoin: Number(bitcoin),
          ethereum: Number(ethereum),
          litecoin: Number(litecoin)
        }
      },
      { new: true }
    )
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });
};
