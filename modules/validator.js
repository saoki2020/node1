const express = require('express');

module.exports = {
  validateForm(req, res) {
    const userName = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirm_password;

    if (!userName || !email || !password || !confirmPassword) {
      throw new Error('必須項目を入力してください');
    } else if (password.length < 7) {
      throw new Error('7文字以上のパスワードを入力してください');
    } else if (password != confirmPassword) {
      throw new Error('パスワードが確認用と一致しません');
    } else {
      return true;
      };
  },
}
