const express = require("express");
const path = require("path");

const libs = require("./components/libs");


const app = express();
const port = process.env.PORT || "8888";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (request, response) => {
  let data = await libs.loadLibs();
  response.render("index", { title: "Home", libs: data });
});

app.get("/library/:id", async (request, response) => {
    let libData = await libs.getLibById(request.params.id);
    response.render("library", {title: "Library", lib: libData});
});
 

//server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});