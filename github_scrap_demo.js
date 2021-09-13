const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
let data = {}

request("https://github.com/topics",callback);

function callback(error, response, html){
    if(!error) {
        let manipulationTool = cheerio.load(html)
        let allAnchors = manipulationTool(".no-underline.d-flex.flex-column.flex-justify-center");

        for(let i = 0; i < allAnchors.length; i++ ){
            topicProcessor("https://github.com/" + manipulationTool(allAnchors[i]).attr("href"),
            manipulationTool(manipulationTool(allAnchors[i]).find("p")[0]).text().trim());
        }
    }
} 

function topicProcessor(url, topictName){
    request(url, function(err, resp, html) {
        let mt = cheerio.load(html)
        let allHeadings = mt(".f3.color-text-secondary.text-normal.lh-condensed");
        allHeadings = allHeadings.slice(0,5)
        //slice gives elements from 0 to 5-1 from this list
        for(let i = 0; i < allHeadings.length; i++){
            console.log(mt(mt(allHeadings[i]).find("a")[1]).text().trim());
            console.log("https://github.com/"+mt(mt(allHeadings[i]).find("a")[1]).attr("href"));
            console.log("---------------------------------------------")
        } 
    })
}