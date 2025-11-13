const router = require('express').Router()
const sqlDb = require('../../../db_connection')

//*add the name of table this part of the api will be working on
const tableName = 'users'

const obfuscateSqlParams = (reqBody, doAssignment = false) => { 
        const reqKeys = Object.keys(reqBody)
        console.log(reqBody)
        return reqKeys.map(e => doAssignment ? `${e} = ?` : '?'
)}   

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
        First_Name, 
        Last_Name,
        User_Name,
        Email,
        Password
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
        First_Name,
        Last_Name,
        User_Name,
        Email,
        Password
    } = req.body

    //!hacky ahhh fix for the fact that for some reason the reqBody obj comes back with id even tho I dont tell it to...
    delete reqBody.id

    const query = `Update ${tableName}
                    Set (${obfuscateSqlParams(reqBody, true)})
                    Where id = ?`
    //Object.values(reqBody).push(req.body.id)
    const { id } = req.body
    console.log(query)
    const updatedItem = await sqlDb.promise().query(query, [First_Name, Last_Name, User_Name, Email, Password, id])

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