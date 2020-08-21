import axios from "axios";

// export function fetchData() {
//     return axios.get('http://localhost:4000/');
// }

export function fetchCovidData() {
    return axios.get('https://disease.sh/v3/covid-19/jhucsse');
}

