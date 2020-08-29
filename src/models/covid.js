const url = `https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=0`
const url2 = `https://disease.sh/v3/covid-19/all?yesterday=true`
const continentStats = `https://disease.sh/v3/covid-19/continents?yesterday=true&twoDaysAgo=false&allowNull=true`
class CovidModel {
    static all = async () => {
        return await fetch(url).then(res => res.json())
    }
    static getCountry = async (countryName) => {
        const countryUrl = `https://disease.sh/v3/covid-19/countries/${countryName}?strict=true`
        return await fetch(countryUrl).then(res => res.json())
    }
    static global = async () => {
        return await fetch(url2).then(res => res.json())
    }
    static continent = async () => {
        return await fetch(continentStats).then(res => res.json())
    }

}

export default CovidModel
