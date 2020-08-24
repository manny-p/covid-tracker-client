const url = `https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=0`

class CovidModel {
    static all = async () => {
        return await fetch(url).then(res => res.json())
    }
}

export default CovidModel
