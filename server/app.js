const express = require('express')
const cors = require('cors')

const app = express()

const port = 3000 
const apiV1 = './routes/api/v1/'

app.use(cors())

//?use this if you want to restrict only this<-(this being the url below) front end to access this backend 
//app.use(cors({ origin : 'http//localhost:5173' }))

app.use(express.json())
app.use(express.static('public'))

app.use(require('./routes/static.js'))
app.use('/users', require(`${apiV1}users`))
app.use('/ships', require(`${apiV1}ships`))

app.listen(port, () => console.log(`listening on port:${port}`))