const express = require('express');
const { validateForm } = require('../modules/validator');

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
    if (validateForm(req, res) == true) {
      res.render('home', { title: 'Home', name: req.body.name} );
    }
  }
}
