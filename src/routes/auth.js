const express = require('express');
const { RegisterUser, LoginUser } = require('../controllers/Auth');

const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login', LoginUser);

module.exports = router;
