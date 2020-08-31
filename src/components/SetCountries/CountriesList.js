import React, {useContext, useEffect} from "react"
import useCountry from "../../hooks/useCountry"
import {Context} from "../../store"

export default ({covid}) => {


    
    const {token} = useContext(Context)

    // useEffect(()=>{
        
    // },[data])

    const [loading, user, data, error] = useCountry("http://localhost:4000/users", token)

    console.log('line 17 user bitch', user)
    console.log('line 18 data baby', data)

    // let userLoggedIn = null;
    // if (user) 
    //     userLoggedIn = JSON.stringify(user);
    //     console.log(`user.msg`, user.msg)
    //     console.log(`userLoggedIn`, userLoggedIn)

    // }

    if (!loading) {
        console.log("DAATAAA:", user)
        return <div className="CountriesList">{covid.filter(shit => {
            return data.indexOf(shit.country) !== -1
        }).map(record => {

            // console.log("FUCK YOU QUERY", typeof (query), JSON.stringify(query, null, 2))

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

    } else if (loading) {
        return <h3>Loading....</h3>
    } else {
        return <h3>{error.message}</h3>
    }

}
