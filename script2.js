const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");


request("https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/ball-by-ball-commentary", callback)

//when the work is done...i.e., when we get response, then callback function runs
//it is done to prevent time waste..i.e., it will run only when the work is done
function callback(error, response, html) {
    if(!error) {
        const manipulationTool = cheerio.load(html);

        let comments = manipulationTool(
            ".col-14.col-md-15.col-lg-14 .match-comment-long-text p");

        let reqComment = manipulationTool(comments[0]).text();
        console.log(reqComment);
    }
}