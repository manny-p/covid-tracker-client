import React from "react"
import useGlobalState from "../../state"

// pass in country prop from sidebar
export default ({country}) => {

    // get user
    const [, setUser] = useGlobalState('user')
    // get user token
    const [token] = useGlobalState('token')

    // user clicks button and fires event handler that initiates server communication
    const HandleSave = async () => {
        // console.log('FUCKkkkkkkkkkkkk' + country.props.children)
        try {

            const url = "http://localhost:4000/api/countries/save"

            // make a fetch post to send country to server with Bearer token
            const results = await fetch(url, {
                // fetch options
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({countries: [country.props.children]}),
            })

            // save data from results
            const saveData = await results.json()

        // update global user object with the saveDate
            setUser(()=> saveData)

        } catch(error) {
            alert(error.message)
        }
    }

    return (
        <button onClick={HandleSave}>Save</button>

    )
}



