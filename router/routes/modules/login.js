const login = {
  'post': (req, res) => {
    if (req.body.password === 'pass') {
      req.session.user = req.body.email;
      res.send(true);
    } else {
      res.send(false);
    }
  },
  'delete': (req, res) => {
    res.contentType('application/json');

    req.session.destroy();
    res.send({authenticated: false});
  }
};

module.exports = login;
