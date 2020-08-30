import React from "react"
import useGlobalState from "../../state"
import {Link} from "react-router-dom";


export default ({covid}) => {
    console.log(covid)

    setTimeout(() => console.log("USERRRRR!!!!!!" + JSON.stringify(user, null, 2)), 300 )

    const [user] = useGlobalState("user")

    const query = covid

    if (user) {return <div className="CountriesList">{covid.filter(data => {
        console.log("Ceeeeeeeck" + JSON.stringify(user, null, 2))
        return user.countries.indexOf(data.countries)
    }).map(record => {

        console.log("FUCK YOU QUERY", typeof (query), JSON.stringify(query, null, 2))

        return (
            <div style={{display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                <p>Country {record.country}</p>
                <p>Total Cases {record.cases}</p>
                <p>Deaths {record.deaths}</p>
                <p>Recovered {record.recovered}</p>
            </div>
        )
    })}
    </div>} else {
        return <h3>Please <Link to="/Login">log in</Link> to save country</h3>
    }
    // if (!user) return 
}





