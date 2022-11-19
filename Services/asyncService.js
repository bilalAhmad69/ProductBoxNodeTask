const axios = require("axios");
const cheerio = require("cheerio");
const getTitle = async (url) => {
  const webPage = await axios.get(url);
  const $ = cheerio.load(webPage.data);
  const title = $("title").text();
  return title;
};

const getTitles = async (urls) => {
  const titles = [];
  let $ = "";
  const webPages = await axios.all(
    urls.map(async (url) => await axios.get(url))
  );

  webPages.map((webPage) => {
    $ = cheerio.load(webPage.data);
    titles.push($("title").text());
  });
  return titles;
};

module.exports = { getTitle, getTitles };
