const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://github.com/topics",callback);

function callback(error, response, html){
    if(!error) {
        let manipulationTool = cheerio.load(html)
        let allAnchors = manipulationTool(".no-underline.d-flex.flex-column.flex-justify-center");

        for(let i = 0; i < allAnchors.length; i++ ){
            console.log("https://github.com/" + manipulationTool(allAnchors[i]).attr("href"));
            console.log(manipulationTool(manipulationTool(allAnchors[i]).find("p")[0]).text().trim());
        }
    }
} 