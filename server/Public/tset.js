const showTest = document.querySelector('#test')

const getEvent = async () => {
    const res = await fetch('/api/v1/users')
    const data = await res.json()
    return data
}

;(async () => {
    showTest.textContent = getEvent()
})()