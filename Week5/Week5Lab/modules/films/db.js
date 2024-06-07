const mongoose = require("mongoose");
const { title } = require("process");

const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/testdb?authSource=admin`;

const FilmSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String
}
);
const Film = mongoose.model("Film", FilmSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); 
}

async function getFilms() {
  await connect();
  return await Film.find({}); 
}

async function initializeFilms(){
  const filmList = [
  {
    title: "Baby Driver",
    year: 2017,
    rating: "18-A"
  },
  {
    title: "Toy Story",
    year: 1995,
    rating: "G"
  }
  ];
  await Film.insertMany(filmList);
}

async function updateFilmRating(title, newRating){
  await Film.updateOne(
    {title: title},
    {rating: newRating}
  );
}

async function deleteFilmsByRating(rating){
  await Film.deleteMany(
    { rating: rating }
  );
}

module.exports = {
  getFilms,
  initializeFilms,
  updateFilmRating,
  deleteFilmsByRating
}