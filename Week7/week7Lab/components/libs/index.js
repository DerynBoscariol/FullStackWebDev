const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var xml;
let libNameSpace = "http://www.example.com/libData";

async function loadXml(){
    if(xml == undefined){
        let response = await fetch(
            "http://localhost:8888/library-data.kml",
            {
                method: "get",
                headers: {
                    "Content-Type": "application/xml"
                }
            }
        );
        data = new JSDOM(await response.text(), {contentType: "application/xml"});

        xml = data.window.document;
    }
    return xml;
}
async function loadLibs(){
    xmlDocument = await loadXml();
    return xmlDocument.querySelectorAll("Placemark");
}

async function getLibById(id){
    xmlDocument = await loadXml();
    let results = xmlDocument.getElementById(id);
    return results;
}

module.exports = {
    loadLibs,
    getLibById
};