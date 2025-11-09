const router = require('express').Router()
const sqlDb = require('../../../db_connection')

router.get('/', async (req, res) => {
    res.send('you made it to users')
})

router.get('/:id', async (req, res) =>{
    const { id } = req.params

    const query = `Select * From spaceships as s
                    Where s.id = ${id}`

    const ship = await sqlDb.promise().query(query)

    res.send(ship[0].length === 0 ? { error : `oops looks like we couldn't find the spaceship with id:${id}` } : ship[0][0])
})

router.put('/create', async (req, res) => {
    const { Name, Universe } = req.body

    const query = `Insert Into 
                    SpaceShip (Name, Universe)
                    Values ( ?, ?)`

    const addedShip = await sqlDb.promise().query(query, [Name, Universe])
    //don't yet know how to get the data to come down into the API from the front end... need to figure this out
    res.send(addedShip)
})

router.post('/update', async (req, res) => {

})

router.delete('/delete', async (req, res) => {

})


module.exports = router