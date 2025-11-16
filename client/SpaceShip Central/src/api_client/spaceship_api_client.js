import { apiCall } from '../utils/fetch_apicall_data'

const url = 'http://localhost:3000/ships'

const getShip = async (Id) => await apiCall(`${url}/${Id}`)

const createShip = async (ship) => await apiCall(`${url}/create`, {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(ship)
})

const updateShip = async (ship) => await apiCall(`${url}/update`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(ship)
})

const deleteShip = async (Id) => await apiCall(`${url}/delete/${Id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})

export { getShip, createShip, updateShip, deleteShip }