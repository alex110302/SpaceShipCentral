const express = require('express')
const app = express()
const prot = 3000 

app.use(express.json())
app.use('api/v1/', require('./routes/api/v1/spaceship_central.js'))
app.use(require('./routes/static.js'))

app.listen(prot, () => console.log(`listening on port:${port}`))