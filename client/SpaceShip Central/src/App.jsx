import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { apiCall } from './utils/fetch_apicall_data'

const fetchUser = apiCall

const test = async () => {
  return JSON.stringify(await fetchUser('http://localhost:3000/users/1'))
}

function App() {

  

  console.log(test())

  return (
    <>
      <div>
        <p>
          {test()}
        </p>
      </div>
    </>
  )
}

export default App
