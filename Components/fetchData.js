let data = []
const FetchData = async (query, input) => {
    let data = {}
    try {
        const response = await fetch(`https://fhir.imagerad.com/dummy/Patient/?${query}=${input}`, {
            method: 'GET',
            mode: 'cors'
        });
        data = await response.json();
    } catch(error) {
        data = 'ERROR'
    }
    console.log(data)
    return data.entry
};

export default FetchData;