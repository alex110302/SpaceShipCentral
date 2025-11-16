import { apiCall } from '../utils/fetch_apicall_data'

const url = 'http://localhost:3000/users'

const getUser = async (Id) => await apiCall(`${url}/${Id}`)

const createUser = async (user) => await apiCall(`${url}/create`, {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})

const updateUser = async (user) => await apiCall(`${url}/update`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})

const deleteUser = async (Id) => await apiCall(`${url}/delete/${Id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})

export { getUser, createUser, updateUser, deleteUser }