const express = require('express');

module.exports = {
  goIndex(req, res) {
    res.render('index');
  },
  goLogin(req, res) {
    res.render('login');
  },
  goRegister(req, res) {
    res.render('register');
  },
}
