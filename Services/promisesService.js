const axios = require("axios");
const RSVP = require("rsvp");
const cheerio = require("cheerio");
const getTitle = (url) => {
  return new RSVP.Promise((resolve, reject) => {
    resolve(
      axios.get(url).then((webPage) => {
        const $ = cheerio.load(webPage.data);
        return $("title").text();
      })
    );
    reject(new Error("message"));
  });
};
const getTitles = (urls) => {
  const titles = [];
  return new RSVP.Promise((resolve, reject) => {
    resolve(
      axios.all(urls.map((url) => axios.get(url))).then((webPages) => {
        webPages.map((webPage) => {
          const $ = cheerio.load(webPage.data);
          titles.push($("title").text());
        });
        return titles;
      })
    );
    reject(new Error("message"));
  });
};

module.exports = { getTitle, getTitles };
