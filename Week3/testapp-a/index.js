const express = require("express");
const path = require("path"); //needed for functions having to do with file paths
const {MongoClient, ObjectId} = require("mongodb"); 
const { request } = require("http");

//Database setup
const dbUrl = "mongodb://localhost:27017/";
const client = new MongoClient(dbUrl); // create a MongoDb client


const app = express();
const port = process.env.PORT || "8888";

//Settings for Express app
app.set("views", path.join(__dirname, "views")); //setting for "views" is set to path: __dirname/views
app.set("view engine", "pug");

//Set up folder for static files (e.g. CSS, client-side JS, images)
app.use(express.static(path.join(__dirname, "public")));

//SET UP PAGE ROUTES
app.get("/", async (request, response) => {
  //response.status(200).send("Test");
  let links = await getLinks();
  //console.log(links);
  response.render("index", { title: "Home", menu: links });
});
app.get("/about", async (request, response) => {
  let links = await getLinks();
  response.render("about", { title: "About", menu: links });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

//NEW SETTINGS (typically added with other settings)
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// ADMIN PAGES THAT USE MongoDB-----------------------
app.get("/admin/menu", async (request, response) => {
  let links = await getLinks();
  response.render("menu-list", {title: "Administer menu links", menu: links})});

//CREATE PAGE AND FORM PROCCESSING PATH
app.get("/admin/menu/add", async (request, response) => {
  let links = await getLinks();
  response.render("menu-add", {title: "Add link", menu: links})});

app.post("/admin/menu/add/submit", async (request, response)=>{
  //For POST forms data gets submitted in the body (request.body)(in long string query format)
  let wgt = request.body.weight; //use name attribute from form field - access like json object - request.body.<field_name>
  let href = request.body.path;
  let text = request.body.name;

  let newLink = {
    weight: parseInt(wgt),
    path: href,
    name: text
  };

  await addLink(newLink);
  response.redirect("/admin/menu"); //when done redirects here
})

//DELETE FORM submission path
app.get("/admin/menu/delete", async (request, response)=>{
  //GET form data is submitted in a query string in the url, to access use request.query.<field_name>
  await deleteLink(request.query.linkId);
  response.redirect("/admin/menu");
});

/// ****************************LAB CONTENT*************************************
//GET route for "/admin/menu/edit" to display edit form page
app.get("/admin/menu/edit", async (request, response) => {
  if (request.query.linkId){
    let linkToEdit = await getSingleLink(request.query.linkId);
    let links = await getLinks();
    response.render("menu-edit", {title: "Edit menu link", menu: links, editLink: linkToEdit});
  } else {
    response.redirect("/admin/menu");
  }
})

//Processing EDIT form
app.post("/admin/menu/edit/submit", async (request, response) => {
  let idFilter = {_id: new ObjectId(request.body.linkId)}; ////*********** */
    let link = {
    weight: request.body.weight,
    path: request.body.path,
    name: request.body.name
  };
  await editLink(idFilter, link);
  response.redirect("/admin/menu");

}) 

///FUNCTION TO UPDATE LINKS
async function editLink(filter, link) {
  db = await connection();
  //let editFilter = {_id: new ObjectId(id)};
  //const options = {upsert:true};
  let updateDoc = {
    $set: {
      weight: link.weight,
      path: link.path,
      name: link.name
    }
  }
  const result = await db.collection("menuLinks").updateOne(filter, updateDoc);
} 
//**************************** END OF LAB CONTENT ********************************
//MONGODB FUNCTIONS-----------------

async function connection(){
  db =client.db("testdb"); // select testdb to use
  return db;
}

//function to select all documents in menuLinks collection
async function getLinks(){
  db = await connection();
  let results = db.collection("menuLinks").find({}); // select all documents in menuLinks collection
  return await results.toArray(); //converts results to an array
}

//Function to insert one document into menuLinks collection
async function addLink(newLinkDoc){
  db = await connection();
  let status = await db.collection("menuLinks").insertOne(newLinkDoc);
  console.log("link added" + status);
}

//Function to delete one document from the menuLinks collection by _id
async function deleteLink(id){
  let idFilter = {_id: new ObjectId(id)};
  db = await connection();
  let result = await db.collection("menuLinks").deleteOne(idFilter);
  if (result.deletedCount == 1)
    console.log("link deleted")
}

//Function to retrieve a single document from menuLinks

async function getSingleLink(id) {
  db = await connection();
  const editId = {_id: new ObjectId(id)};
  let result = await db.collection("menuLinks").findOne(editId);
  return result;
}
