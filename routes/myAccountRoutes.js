const express = require('express');
const { getMyAccount, updateMyAccount } = require('../controllers/myAccountController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getMyAccount);
router.put('/', auth, updateMyAccount);

module.exports = router;
