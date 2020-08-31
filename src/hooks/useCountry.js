import {useState, useEffect, useContext} from 'react'
import {Context} from '../store'


export default (url="", email="", password ="") => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {token, setUser, user} = useContext(Context);
    
    useEffect(() => {
       const useFetch = async () => {
      
            setLoading(true)
            const results = await fetch(url, {
                headers: {
                    "Authorization": "Bearer " + token
                },
            }).catch(err => setError(err))
            const fetchResults = await results.json();
            setData(fetchResults.user.countries);
            setUser(fetchResults.user)
            console.log("Check FUCKIN USER", user)
            setLoading(false)
    }
         useFetch()

        // parse the token
    },[])

    return [loading, user, data, error]
}





// import {useEffect, useState} from "react";

// const useFetch = (url = "", options = {}) => {
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         // const fetchData = (async () => {
//         (async () => {
//             try {
//                 const res = await fetch(url, options);
//                 const json = await res.json();
//                 setResponse(json);
//             } catch (error) {
//                 setError(error);
//             }
//         })()
//         // fetchData();
//     }, [url, options]);
//     return {response, error};
// };

// export default useFetch
