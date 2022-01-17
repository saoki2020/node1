const express = require('express');

module.exports = {
  goIndex(req, res) {
    res.render('index', { title: 'Home'} );
  },
  goLogin(req, res) {
    res.render('login', { title: 'Login'} );
  },
  goRegister(req, res) {
    res.render('register', { title: 'Register'} );
  },
}
