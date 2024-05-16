const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8888";

app.get("/", (request, response) => {
   // response.status(200).send("TESTING");
   response.render("home")
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");