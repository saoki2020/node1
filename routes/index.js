const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.goIndex);
router.get('/login', controller.goLogin);
router.get('/register', controller.goRegister);
router.post('/home', controller.goHome);

module.exports = router;
