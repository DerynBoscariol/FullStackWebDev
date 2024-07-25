//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const trakt = require("./modules/trakt/api"); //importing api module

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let movieList = await trakt.getTrendingMovies();
  //console.log(movieList);
  response.render("index", { title: "Movies", movies: movieList });//passing movielist in movies variable
});

app.get("/related/:id", async (request, response)=>{
//to access the placeholder :id (like variable name) use request.params.id 
let movieList = await trakt.getRelatedMovies(request.params.id);
//console.log(movieList);
response.render("related", {
  title: "Related Movies",
  movies: movieList
})
});

app.get("/topshows", async (request, response) => {
  let top15 = await trakt.getTopShows();
  console.log(top15);
  response.render("topshows", {
    title: "Top 15 Shows",
    shows: top15
  });
});



//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


