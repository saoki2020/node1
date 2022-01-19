const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const formValidator = require('../modules/formValidator');

router.get('/', controller.goIndex);
router.get('/login', controller.goLogin);
router.get('/register', controller.goRegister);
router.post('/home', formValidator, controller.goHome);

module.exports = router;
