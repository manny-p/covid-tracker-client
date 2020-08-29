import React from "react"
import useFetch from "./useFetch"


export default () => {
    const res = useFetch("https://disease.sh/v3/covid-19/jhucsse", {});
    if (!res.response) {
        return <div>Loading...</div>
    }
    const countryName = res.response.status
    // const imageUrl = res.response.message
    return (
        <div>
            <h3>{countryName}</h3>
        </div>
    );
}






// import React from "react"
// import Sidebar from "../SideBar/SideBar"
// import classes from "../SideBar/SideBar.module.css"
// import useGlobalState from "../state"
// import useFetch from "./useFetch"
//
// export default ({countryList}) => {
//     const [, setUser] = useGlobalState('user')
//
//     try {
//         const url = "https://disease.sh/v3/covid-19/jhucsse"
//
//         const [loading, data] = useFetch( url, {
//
//         })
//     } catch(error) {
//         alert(error.message)
//     }
//
//
//
//
//     return ({!loading && <h1>{data}</h1>})
//
// }
//
//
// // import React from "react"
// // import classes from "../SideBar/SideBar.module.css"
// // import useGlobalState from "../state"
// //
// // export default () => {
// //     // if change to user object, fetch more data
// //
// // // get data from api
// // // map data to list
// //
// //
// //     // setUser, when a user selects a country, we update user object
// //     const [user, setUser] = useGlobalState("user")
// //     const [token] = useGlobalState("token")
// //
// //
// //     return (
// //         <div className={classes.Section3Title}>
// //             <p>Country</p>
// //             <p>Total Cases</p>
// //             <p className={classes.D}>Deaths</p>
// //             <p className={classes.R}>Recovered</p>
// //         </div>
// //     )
// // }
//
//
//
{/*// country={i.country}*/}
{/*// cases={i.cases}*/}
{/*// deaths={i.deaths}*/}
{/*// recovered={i.recovered}*/}

{/*})} </div>*/}



{/*//             user.id &&*/}
{/*//         (<div>*/}
{/*//             {user.countries.map((record, index) => (*/}
{/*//                 <div key={index}>{record.country}</div>*/}
{/*//             ))}*/}
{/*//         </div>)*/}
//
{/*// }*/}
{/*//*/}
{/*//*/}
{/*// )*/}
{/*// }*/}

{/*//*/}
{/*//     const res = useFetch("https://disease.sh/v3/covid-19/jhucsse", {});*/}
{/*//     if (!res.response) {*/}
{/*//         return <div>Loading...</div>*/}
{/*//     }*/}
//     const countryName = res.response.status
//     // const imageUrl = res.response.message
//     return (
//         <div>
//             <h3>{countryName}</h3>
//         </div>
//     );
// }
