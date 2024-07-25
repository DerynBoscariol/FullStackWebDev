
const art = "https://api.artic.edu/api/v1"; //base URL for any AIC API requests


//Functions for Art Institute of Chicago API requests.

async function getArtwork(){
    let reqUrl = `${art}/artworks?[is_public_domain]=true&limit=52&page=1`; 
    //await fetch (requesturl, options)
    let response = await fetch(
        reqUrl, 
        {
        method: "get",
        headers:{
            "Content-Type": "application/json" //specifying the data type expected
            }
        }
    );
    let respInfo = await response.json();

    return respInfo.data;
}

async function getSingleArtwork(id) {
    let reqUrl = `${art}/artworks/${id}`;
    let response = await fetch(
        reqUrl,
        {
            method: "get", 
            headers: {
                "Content-Type": "application/json"

            }
        }
    );
    let respInfo = await response.json();

    return respInfo.data;
}

async function getArtByYear(year) {
    let reqUrl = `${art}/artworks/?fields=${year}&[is_public_domain]=true&limit=52&page=1`
    let response = await fetch(
        reqUrl, 
        {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    let respInfo = await response.json();

    return respInfo.data;
}



module.exports = {
    getArtwork,
    getSingleArtwork,
    getArtByYear
}