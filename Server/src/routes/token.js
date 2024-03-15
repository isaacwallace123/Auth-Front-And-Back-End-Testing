const router = require('express').Router();
const jwt = require('jsonwebtoken');

const { generate } = require('../utils/token');

router.use('/generate/:username/:password', async(req, res) => {
    const { token, code } = await generate(req.params.username, req.params.password);

    if (code != 200) {
        res.sendStatus(code);
        return;
    }

    res.json({ token: token });
});

router.use('/validate/:token', async(req, res) => {
    const token = req.params.token;

    if (!token) {
        res.sendStatus(401);
        return;
    }

    try {
        const isValid = jwt.verify(token, process.env.SECRET);

        res.json({
            isValid: isValid
        })
    } catch(err) {
        res.sendStatus(500);
        console.log(err)
    }
})

module.exports = router;