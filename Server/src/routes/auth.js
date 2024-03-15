const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { get } = require('../utils/handleUser');

const saltRounds = Number(process.env.SALT_ROUNDS) || 10;

//const compare = await bcrypt.compare("Test", hash)
router.use('/user/:username/pass/:password', async(req, res) => {
    const username = req.params.username;
    const password = req.params.password;
})

module.exports = router;