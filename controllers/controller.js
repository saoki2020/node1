const { validationResult } = require('express-validator');

module.exports = {
  goIndex(req, res) {
    res.render('index', { title: 'Index'} );
  },
  goLogin(req, res) {
    res.render('login', { title: 'Login'} );
  },
  goRegister(req, res) {
    res.render('register', { title: 'Register'} );
  },
  goHome(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    };
    res.render('home', { title: 'Home', name: req.body.name} );
  }
}
