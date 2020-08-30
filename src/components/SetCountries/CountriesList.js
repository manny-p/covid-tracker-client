import React, { useContext } from "react"
// import useGlobalState from "../../state"
import useCountry from "../../hooks/useCountry"
import {Context} from '../../store'

export default ({covid}) => {


    console.log(covid)
    const {token} = useContext(Context)
   // const [user] = useGlobalState("user")

   const [loading, user, error] = useCountry("http://localhost:4000/users", token )

    const query = covid;

    // let userLoggedIn = null;
    // if (user) {
    //     userLoggedIn = JSON.stringify(user);
    //     console.log(`user.msg`, user.msg)
    //     console.log(`userLoggedIn`, userLoggedIn)

    // }

    if(!loading) {
        return <div className="CountriesList">{covid.filter(data => {

            return user.countries.indexOf(data.country) !== -1
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

        </div>

    } else if( loading) {
        return <h3>Loading....</h3>
    } else {
        return <h3>{error.message}</h3>
    }

}
