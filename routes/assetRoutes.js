const requireLogin = require('middlewares/requireLogin');

module.exports = app => {
  app.post('/api/addssets', requireLogin, async (req, res) => {
    //  req.user.bitcoin, ethereum, litecoin
    const user = await req.user.save();

    res.send(user);
  });
};
