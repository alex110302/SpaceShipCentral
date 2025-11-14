const apiCall = async (url, options = {}) => {
    try {
        const res = await fetch(url, options)

        if (!res.ok) {
            const e = new Error()
            e.data = res
            throw e         
        } 
        
        const resObj = await res.json()

        console.log(resObj)

        return resObj
    } catch (e) {
        const errorObj = { 
            Error : e.message,
            Status : e.data.res?.status || "Network Error"
        }

        console.error(errorObj)
        
        return errorObj
    }
}

export { apiCall }