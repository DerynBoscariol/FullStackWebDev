const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var xml;
let parkNS = "http://www.example.org/PFRMapData";

async function loadXml() {
  if (xml == undefined) {
    let response = await fetch(
      "http://localhost:8888/facilities-data.xml",
      {
        method: "get",
        headers: {
          "Content-Type": "application/xml"
        }
      }
    );
    //convert XML string to XML DOM document
    data = new JSDOM(await response.text(), { contentType: "application/xml" }); //converting from xml to jsdom object
    //console.log(data);
    xml = data.window.document; //set the xml to the XML DOM document which we can query using DOM methods - equivalent to ducument in relattion to html but instead for xml
  }
  return xml;
}
async function loadParks() {
  xmlDocument = await loadXml(); //retrieve xml dom document
  return xmlDocument.querySelectorAll("Location");

}
async function getParkById(id) {
  xmldocument = await loadXml();  //loadXML because we are going to query the xml document
  let xpath = `//Location[LocationID/text()='${id}']`; // location where location id is equal to id
  let results = xmldocument.evaluate(
    xpath, 
    xmldocument, 
    parkNS,  
    4, //unordered_node_iterator_type
    null );
    return results.iterateNext();
}

module.exports = {
  loadParks,
  getParkById
};