const router = require('express').Router()
const sqlDb = require('../../../db_connection')

router.get('/', async (req, res) => {
    res.send('you made it to users')
})

router.get('/:id', async (req, res) =>{
    const { id } = req.params

    const query = `Select * From users as u
                    Where u.id = ${id}`

    const user = await sqlDb.promise().query(query)

    res.send(user[0].length === 0 ? { error : `oops looks like we couldn't find the user with id:${id}` } : user[0][0])
})

router.put('/create', async (req, res) => {

})

router.post('/update', async (req, res) => {

})

router.delete('/delete', async (req, res) => {

})


module.exports = router