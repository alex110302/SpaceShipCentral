const express = require('express')
const app = express()

const port = 3000 
const apiV1 = './routes/api/v1/'

app.use(express.json())
app.use(express.static('public'))

app.use(require('./routes/static.js'))
app.use('/users', require(`${apiV1}users`))
app.use('/ships', require(`${apiV1}ships`))

app.listen(port, () => console.log(`listening on port:${port}`))