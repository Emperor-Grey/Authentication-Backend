const express = require('express');

const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login', LoginUser);

module.exports = router;
