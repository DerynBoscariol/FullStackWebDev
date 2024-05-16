const exp = require("constants");
const express = require("express");
const path = require("path"); // needed for functions having to do with file paths

const app = express();
const port = process.env.PORT || "8888";

//Settings for express app
app.set("views", path.join(__dirname, "templates")) //views refers to setting named views, not folder views(templates)// __dirname refers to where the folder is set, templates is set to path: __dirnmane/templates

app.set("view engine", "pug");

//Set up folder for static files public folder(CSS, client-side js, images, etc.)
app.use(express.static(path.join(__dirname,"public")));

// SET UP PAGE ROUTEs
app.get("/", (request,response) => {    //making a get request for / page path
   //response.status()200.send("test message")
   response.render("index", {title: "Home"})  //name of template file without the .pug  and any variables we want to pass (as json)
});

app.get("/about", (request, respose)=>{
    respose.render("about", {title:"About"})
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})