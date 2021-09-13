const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");


request("https://www.google.com", callback)

//when the work is done...i.e., when we get response, then callback function runs
//it is done to prevent time waste..i.e., it will run only when the work is done
function callback(error, response, html) {
    if(!error) fs.writeFileSync("index.html", html);
    //console.log("body:", body);
}