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
        //!this is cool and all and it works but it also needs to 
        //! send back the reason why it failed as of right now Error 
        //! shows '' when something fails such as same email or username... 
        //! something we def want the user to know about
        const errorObj = { 
            Error : e.message,
            Status : e.data.res?.status || "Network Error"
        }

        console.error(errorObj)
        
        return errorObj
    }
}

export { apiCall }