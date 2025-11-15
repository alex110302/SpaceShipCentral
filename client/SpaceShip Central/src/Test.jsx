import { useState, useEffect, useRef } from 'react'
import './App.css'
import './Test.css'
import { apiCall } from './utils/fetch_apicall_data'


const fetchUser = apiCall


function Test() {

  const userIdInput = useRef()
  const userFirstName = useRef()
  const userLastName = useRef()
  const userUserName = useRef()
  const userEmail = useRef()
  const userPassword = useRef()

  const [user, setUser] = useState()
  const [userId, setUserId] = useState(1) //*the 1 makes the default data of userId into well 1 duh
  const [newUser, setNewUser] = useState()

  useEffect(() => {

    const fetchData = async () => {
      const testRes = JSON.stringify(await fetchUser(`http://localhost:3000/users/${userId}`))
      console.log(testRes)

      setUser(testRes)
    }

    fetchData()
  }, [userId])

  useEffect(() => {
    const addUser = async () => {
      await fetchUser(`http://localhost:3000/users/create`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })

      console.log(newUser)
    }

    addUser()
  }, [newUser])

  const updateUser = () => setUserId(userIdInput.current.value)

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
        <button onClick={updateUser}>Switch User</button>
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
