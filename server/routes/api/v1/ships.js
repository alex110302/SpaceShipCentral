const router = require('express').Router()
const sqlDb = require('../../../db_connection')
const obfuscateSqlParams = require('../../../utils/obfuscate_sql_params')

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
    const reqBody = { 
        Name,
        Universe
    } = req.body

    const query = `Insert Into 
                    ${tableName} (${Object.keys(reqBody)})
                    Values (${obfuscateSqlParams(reqBody)})`

    const addedItem = await sqlDb.promise().query(query, Object.values(reqBody))
    
    //TODO: don't yet know how to get the data to come down into the API from the front end... need to figure this out
    res.send(addedItem)
})

router.post('/update', async (req, res) => {
    const reqBody = {
        Name,
        Universe
    } = req.body

    //!hacky ahhh fix for the fact that for some reason the reqBody obj comes back with id even tho I don't tell it to...
    const { id } = req.body
    delete reqBody.id

    const query = `Update ${tableName}
                    Set ${obfuscateSqlParams(reqBody, true)}
                    Where id = ?`

    //this allows for copy past so that other routers can use basically the same code
    const tempArray = Object.values(reqBody)
    tempArray.push(id)
    
    const updatedItem = await sqlDb.promise().query(query, tempArray)

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