//*THIS TEST FILE IS FOR TESTING PURPOSES SO SOME PRACTICES THAT ARE DONE IN HERE SHOULD NOT BE DONE IN THE REAL DEAL


import { useState, useEffect, useRef } from 'react'
import './App.css'
import './Test.css'
import { getUser, createUser, updateUser, deleteUser } from './api_client/user_api_client'

//*I have/had this in here for testing purposes but this apiCall stuff should only be used the in the api_call directory... duh
import { apiCall } from './utils/fetch_apicall_data'
const fetchUser = apiCall


function Test() {

  const [user, setUser] = useState()
  const [userToDelete, setUserToDelete] = useState()
  const [userId, setUserId] = useState(1) //*the 1 makes the default data of userId into well 1 duh
  const [newUser, setNewUser] = useState()

  const userIdInput = useRef()

  const getUserFirstName = useRef()
  const getUserLastName = useRef()
  const getUserUserName = useRef()
  const getUserEmail = useRef()
  const getUserPassword = useRef()

  const userFirstName = useRef()
  const userLastName = useRef()
  const userUserName = useRef()
  const userEmail = useRef()
  const userPassword = useRef()

  useEffect(() => {

    const fetchData = async () => {
      const testRes = JSON.stringify(await getUser(userId))

      //!direct way of calling the api but dont do this its bulky as hell
      //const testRes = JSON.stringify(await fetchUser(`http://localhost:3000/users/${userId}`))]

      setUser(testRes)
    }

    fetchData()

    // const userData = JSON.parse(user)

    // getUserFirstName.current.value = userData.First_Name
    // getUserLastName.current.value = userData.Last_Name
    // getUserUserName.current.value = userData.User_Name
    // getUserEmail.current.value = userData.Email
    // getUserPassword.current.value = userData.Password
  }, [userId])

  useEffect(() => {
    const deleteTheSelectedUser = async () => {
      console.log('hi')

      const resData = await deleteUser(userId)

      console.log(resData)
    }

    deleteTheSelectedUser()
  }, [userToDelete])

  useEffect(() => {
    const addUser = async () => {

      await createUser(newUser)

      //!direct way of calling the api but dont do this its bulky as hell
      // await fetchUser(`http://localhost:3000/users/create`, {
      //   method: "PUT",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(newUser)
      // })

      console.log(newUser)
    }

    addUser()
  }, [newUser])

  const switchUser = () => {
    setUserId(userIdInput.current.value)
  }

  const deleteTheUser = () => {
    setUserToDelete(userIdInput.current.value)

    userIdInput.current.value = ''
    userFirstName.current.value = ''
    userLastName.current.value = ''
    userUserName.current.value = ''
    userEmail.current.value = ''
    userPassword.current.value = ''

    setUser('User Deleted')
  }

  const addNewUser = () => {
    const newUserToAdd = {
      First_Name: userFirstName.current.value,
      Last_Name: userLastName.current.value,
      User_Name: userUserName.current.value,
      Email: userEmail.current.value,
      Password: userPassword.current.value
    }

    setNewUser(newUserToAdd)

    userFirstName.current.value = ''
    userLastName.current.value = ''
    userUserName.current.value = ''
    userEmail.current.value = ''
    userPassword.current.value = ''
  }

  return (
    <>
      <div>
        <h1>User Data</h1>
        <p>
          {user}
        </p>
        <input type='number' ref={userIdInput}></input>
        <button onClick={switchUser}>Switch User</button>
        <button onClick={deleteTheUser}>Delete User</button>
      </div>
      <div>
        <h1>Update User</h1>
        <h3>First Name</h3>
          <input type="text" ref={getUserFirstName}/>
          <h3>Last Name</h3>
          <input type="text" ref={getUserLastName}/>
          <h3>User Name</h3>
          <input type="text" ref={getUserUserName}/>
          <h3>Email</h3>
          <input type="text" ref={getUserEmail}/>
          <h3>Password</h3>
          <input type="text" ref={getUserPassword}/>
          <button className='test-button-add' onClick={updateUser}>Update User</button>
      </div>
      <div>
          <h1>Add User</h1>
          <h3>First Name</h3>
          <input type="text" ref={userFirstName}/>
          <h3>Last Name</h3>
          <input type="text" ref={userLastName}/>
          <h3>User Name</h3>
          <input type="text" ref={userUserName}/>
          <h3>Email</h3>
          <input type="text" ref={userEmail}/>
          <h3>Password</h3>
          <input type="text" ref={userPassword}/>
          <button className='test-button-add' onClick={addNewUser}>Add New User</button>
      </div>
    </>
  )
}

export default Test
