const axios = require("axios");
const cheerio = require("cheerio");
const getTitle = (url) => {
  return axios.get(url).then((webPage) => {
    const $ = cheerio.load(webPage.data);
    return $("title").text();
  });
};
const getTitles = (urls) => {
  const titles = [];
  return axios.all(urls.map((url) => axios.get(url))).then((webPages) => {
    webPages.map((webPage) => {
      const $ = cheerio.load(webPage.data);
      titles.push($("title").text());
    });
    return titles;
  });
};

module.exports = { getTitle, getTitles };
