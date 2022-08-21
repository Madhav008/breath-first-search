const router = require('express').Router()
const authController = require('./controllers/auth.controller')

router.post('/user/verify', () => {
    res.send("Hii 😆")
})

router.post('/user', authController.createUser)


module.exports = router