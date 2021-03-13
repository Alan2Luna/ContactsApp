const express = require('express')
const { ensureToken,verifiedToken } = require('../lib/libTokens')

const router = express.Router();

router.get('/', ensureToken, async (req, res) => {
    const decode = await verifiedToken(req, res)
    if(decode.id) {
        res.json({
            'auth': true
        })
    } else {
        return decode
    }
})

module.exports = router;