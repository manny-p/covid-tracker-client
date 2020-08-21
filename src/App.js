import React, {useEffect} from 'react';
import Map from './Map'
import {fetchCovidData} from "./Api";
// import {fetchData} from "./Api";

function App() {
    useEffect(() => {
        // fetchData().then(data => console.log(data));
        fetchCovidData().then(response => console.log(response.data));
    }, []);

    return (
        <div className="App">
            <Map/>
        </div>
    );
}

export default App;
