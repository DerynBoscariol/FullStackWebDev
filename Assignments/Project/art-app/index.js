const express = require("express");
const path = require("path");

const art = require("./modules/Art/api"); 
const facts = require("./modules/facts/api");

const app = express();
const port = process.env.PORT || 8888;


//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
    let artworkList = await art.getArtwork();
    //console.log(artworkList);
    response.render("index", { title: "Home", artworks: artworkList });
  });

app.get("/details/:id/:year", async (request, response) => {
    let oneArtwork = await art.getSingleArtwork(request.params.id);
    let factList = await facts.getFacts(request.params.year);
    response.render("details", { title: oneArtwork.title, artwork: oneArtwork, yearFacts: factList });
  });

app.get("/byYear", async (request,response) => {
  response.render("byYear", {title: "Browse Artwork By Year"});
});

app.get("/byYear/submit", async (request, response) => {
  let year = request.body.year;
  let artList = await art.getArtByYear(year);
  response.render(`byYear/${year}`, {title: "Browse Artwork by Year" + year, artworks: artList} )
})


//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });