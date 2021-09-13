const request = require("request");
const cheerio = require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard", callback)

function callback(error,response,html){
    if(!error){
        const manipulationTool = cheerio.load(html);

        let allPlayerAnchors = manipulationTool(".Collapsible__contentInner tbody a.small");

        for(let i = 0; i< allPlayerAnchors.length; i++){
            console.log(manipulationTool(allPlayerAnchors[i]).text());
            console.log(manipulationTool(allPlayerAnchors[i]).attr("href"));
            console.log("---------------------------");
        }
    }
}
