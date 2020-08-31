import React, {useContext} from "react"
import {Context} from "../../store"

// pass in country prop from sidebar
export default ({country}) => {

    const {token, setUser, countries} = useContext(Context)
// const [loading, data, error] = useCountries("http://localhost:4000/users", token )


    // user clicks button and fires event handler that initiates server communication
    const HandleSave = async () => {
        // console.log('FUCKkkkkkkkkkkkk' + country.props.children)
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa ", countries)
        try {

            // const url = "http://localhost:4000/api/countries/save"
            const url = "https://covid-tracker-api-sei.herokuapp.com/api/countries/save"

            // make a fetch post to send country to server with Bearer token

            const results = await fetch(url, {
                // fetch options
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({countries: [countries]}),
            })

            // save data from results
            // const saveData = await results.json()

            // update global user object with the saveDate
            const resultsData = await results.json()
            setUser(resultsData);
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <h2 style={{color: "red", margin:"1rem 0 1rem 0"}}>Confirm?</h2>
            <button onClick={HandleSave}>Save</button>
        </>
    )
}



