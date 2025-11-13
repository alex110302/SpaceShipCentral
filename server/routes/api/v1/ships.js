const router = require('express').Router()
const sqlDb = require('../../../db_connection')

//*add the name of table this part of the api will be working on
const tableName = 'spaceships'

router.get('/', async (req, res) => {
    res.send('you made it to the end point')
})

router.get('/:id', async (req, res) =>{
    const { id } = req.params

    const query = `Select * From ${tableName} as s
                    Where s.id = ?`

    const item = await sqlDb.promise().query(query, [id])

    res.send(item[0].length === 0 ? { error : `oops looks like we couldn't find the ${tableName} with id:${id}` } : item[0][0])
})

router.put('/create', async (req, res) => {
    const { Name, Universe } = req.body
    
    const query = `Insert Into 
                    ${tableName} (Name, Universe)
                    Values ( ?, ?)`
    //*this is parameterized data in mysql2 aka the ? and then query(query, [var, var]) where ? is var
    const addedItem = await sqlDb.promise().query(query, [Name, Universe])
    
    //TODO: don't yet know how to get the data to come down into the API from the front end... need to figure this out
    res.send(addedItem)
})

router.post('/update', async (req, res) => {
    const { id, Name, Universe } = req.body

    const query = `Update ${tableName}
                    Set Name = ?, Universe = ?
                    Where id = ?`
    
    const updatedItem = await sqlDb.promise().query(query, [Name, Universe, id])

    res.send(updatedItem)
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params

    const query = `Delete From ${tableName}
                    Where id = ?`
    
    const deletedItem = await sqlDb.promise().query(query, [id])

    res.send(deletedItem)
})

module.exports = router