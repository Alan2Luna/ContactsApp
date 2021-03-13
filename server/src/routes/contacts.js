const express = require('express')
const router = express.Router()
const { ensureToken, verifiedToken } = require('../lib/libTokens')

const pool = require('../database')

router.get('/', ensureToken, async (req, res) => {
    const decode = await verifiedToken(req, res)
    if(decode.id) {
        const { id: user_id } = decode
        const contacts = await pool.query('SELECT fullname, email, phone FROM contacts WHERE user_id = ?', [user_id])
        if(contacts.length > 0) {
            res.json({
                contacts
                })
        } else {
            res.json({
                message: 'you dont have contacts yet'
            })
        }
    } else {
        return decode
    }
})

router.post('/add', ensureToken, async (req, res) => {
    const decode = await verifiedToken(req, res)
    if(decode.id) {
        const { fullname, phone, email } = req.body
        const { id: user_id } = decode
        const newContact = {
            fullname,
            phone,
            email,
            user_id
        }
        await pool.query('INSERT INTO contacts set ?', [newContact])
        res.status(201).json({
            loading: false,
        })
    } else {
        return decode
    }
})

router.delete('/delete/:id', ensureToken, async (req, res) => {
    const decode = verifiedToken(req, res)
    if(decode.id) {
        const { id: user_id } = decode
        const { id } = req.params
        await pool.query('DELETE FROM contacts WHERE ID = ? AND user_id = ?', [id, user_id])
        res.status(202).json({
            loading: false
        })
    } else{
        return decode
    }
})

router.get('/edit/:id', ensureToken, async (req, res) => {
    const decode = verifiedToken(req, res)
    if(decode.id) {
        const { id: user_id } = decode
        const { id } = req.params
        const data = await pool.query('SELECT * FROM contacts WHERE ID = ? and user_id', [id, user_id])
        return res.json(data)
    } else{
        return decode
    }
})

router.post('/edit/:id', ensureToken, async (req, res) => {
    const decode = verifiedToken(req, res)
    if(decode.id) {
        const { id: user_id } = decode
        const { id } = req.params
        const { fullname, phone, email } = req.body
        const newContact = {
            fullname,
            phone,
            email,
            user_id
        }
        await pool.query('UPDATE contacts SET ? WHERE ID = ? AND user_id = ?', [newContact, id, user_id])
        return res.status(200)
    } else{
        return decode
    }
})

module.exports = router