const url = `https://disease.sh/v3/covid-19/jhucsse`

class CovidModel {
    static all = async () => {
        return await fetch(url).then(res => res.json())
    }
}

export default CovidModel
