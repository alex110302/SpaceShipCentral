const router = require('express').Router()
const path = require('path')
const root = path.join(__dirname, '..', 'public')

router.get('/test', (req, res) => {
    res.sendFile('index.html', { root })
})

//need to return the router for the middleware
module.exports = router