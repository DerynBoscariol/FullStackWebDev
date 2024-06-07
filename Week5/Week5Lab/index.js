const express = require("express");
const path = require("path");
const dotenv = require("dotenv");


dotenv.config();

const db = require("./modules/films/db");


const app = express();
const port = process.env.PORT || "8888";


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTING
app.get("/", async (request, response) => {
  let filmList = await db.getFilms();

  if (!filmList.length) {
    await db.initializeFilms();
    filmList = await db.getFilms();
  }
  response.render("index", { films: filmList });
});

app.get("/update", async (request, response) => {
  await db.updateFilmRating("Baby Driver", "R");
  response.redirect("/");
})

app.get("/delete", async (request, response) => {
  await db.deleteFilmsByRating("R");
  response.redirect("/");
})


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
}); 

