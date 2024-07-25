const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "3000";

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request

//API endpoints

/*
 * expect to receive data ?cm=#
 * returns: { length: <converted_val_in_inches> }
 */
// /api/convert/cmtoin?cm=10
app.get("/api/convert/cmtoin", (request, response) => {
  let cm = request.query.cm;
  let converted = {
    length: cm / 2.54
  }; //convert cm value to inches
  response.json(converted); //send JSON object with appropriate JSON headers
});
/*
 * expect to receive data: ?in=#
 * returns: { length: <converted_val_in_cm> }
 */
app.get("/api/convert/intocm", (req, res) => {
  let inches = req.query.in;
  let converted = {
    length: inches * 2.54
  };
  res.json(converted);
});
//example with POST data
/*
 * expect to receive data { celsius: # }
 * returns: { temperature: <converted_value> }
 */
app.post("/api/convert/ctof", (req, res) => {
  let celsius = req.body.celsius;
  let convert = (celsius * 9/5) + 32;
  let fahrenheit = {
    temperature: convert
  };
  res.json(fahrenheit);
});
//HTTP server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

