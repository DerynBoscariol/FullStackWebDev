const mongoose = require("mongoose");

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//set up Schema and model
const PetSchema = new mongoose.Schema({
  name: String,
  type: String,
  breed: String,
  age: Number
}//, {   Can add collection name here (optional)
 // collection = "MyCollection name"
//}
);
const Pet = mongoose.model("Pet", PetSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all pets from the pets collection
async function getPets() {
  await connect();
  return await Pet.find({}); //return array for find all
}

//initialize pets collection with some data
async function initializePets(){
  const petList = [
    {
      name: "Piper",
      type: "dog",
      breed: "Basset Hound",
      age: 9
    },
    {
      name: "Lucy",
      type: "dog",
      breed: "Basset Hound",
      age: 9
  },
  {
    name: "Fred",
    type: "fish",
    breed: "koi",
    age: 3
}
  ];
  await Pet.insertMany(petList);
}

//function to add a pet to the pets collection
async function addPet(petName, petType, petBreed, petAge){
  let newPet = new Pet({
    name: petName,
    type: petType,
    breed: petBreed,
    age: petAge
  });
  newPet.save(); // this saves the pet to the database
}

//Function to update pet name
async function updateName(oldName, newName){
  await Pet.updateOne(
    {name: oldName},
    {name: newName}
  );
}

module.exports = {
  getPets,
  initializePets,
  addPet,
  updateName
}