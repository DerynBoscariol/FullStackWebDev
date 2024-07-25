const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

/*
 * Functions for Trakt API requests.
 */

async function getTrendingMovies(){
    let reqUrl = `${trakt}/movies/trending?extended=full`; // ?extended=full   <-- adding this will request more info from api
    //await fetch (requesturl, options)
    let response = await fetch(
        reqUrl, 
        {
        method: "get",
        headers:{
            "Content-Type": "application/json", //specifying the data type expected
            "trakt-api-version": 2,
            "trakt-api-key" : process.env.TRAKT_CLIENT_ID
            }
        }
    );
    return await response.json(); //return the json data from the response
}

async function getRelatedMovies(imdbId) {
    let reqUrl = `${trakt}/movies/${imdbId}/related`;
    let response = await fetch(
        reqUrl,
        {
            method: "get", // get is default method
            headers: {
                "Content-Type": "application/json",
                "trakt-api-version": 2,
                "trakt-api-key" : process.env.TRAKT_CLIENT_ID
            }
        }
    );
    return await response.json();
}

async function getTopShows() {
    let reqUrl = `${trakt}/shows/watched/all?limit=15`;
    let response = await fetch(
        reqUrl,
        {
            method: "get", 
            headers: {
                "Content-Type": "application/json",
                "trakt-api-version": 2,
                "trakt-api-key" : process.env.TRAKT_CLIENT_ID
            }
        }
    );
    return await response.json();
}

module.exports = {
    getTrendingMovies,
    getRelatedMovies,
    getTopShows
}
