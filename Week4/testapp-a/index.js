const express = require("express");
const path = require("path"); //needed for functions having to do with file paths

const app = express();
const port = process.env.PORT || "8888";

const adminRouter = require("./modules/menuLinks/router");
const pageRouter = require("./modules/pages/router");

//Settings for Express app
app.set("views", path.join(__dirname, "views")); //setting for "views" is set to path: __dirname/views
app.set("view engine", "pug");

//Set up folder for static files (e.g. CSS, client-side JS, images)
app.use(express.static(path.join(__dirname, "public")));

app.use("/", pageRouter);
app.use("/admin/menu", adminRouter); // all urls starting with /admin/menu will use adminRouter

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})


