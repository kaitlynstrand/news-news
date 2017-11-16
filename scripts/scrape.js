var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {

	request("http://www.nytimes.com", function(err, res, body) {

		var $ = cheerio.load(body);

		var articles = [];

		$(".theme-summary").each(function(i, element) {

			var headline = $(this).children(".story-heading").text().trim();
			var summary = $(this).children(".summary").text().trim();

			if(headline && summary) {
				var headlineClean = headline.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
				var summaryClean = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

				var articlesToAdd = {
					headline: headlineClean,
					summary: summaryClean
				};

				articles.push(articlesToAdd);
			}
		});
		cb(articles)
	});
};

module.exports = scrape;