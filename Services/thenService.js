const axios = require("axios");
const cheerio = require("cheerio");
const getTitle = (url) => {
  return axios.get(url).then((webPage) => {
    const $ = cheerio.load(webPage.data);
    return $("title").text();
  });
};
const getTitles = (urls, address) => {
  let i = 0;
  const titles = [];
  return axios.all(urls.map((url) => axios.get(url))).then((webPages) => {
    webPages.map((webPage) => {
      const $ = cheerio.load(webPage.data);
      titles.push({
        address: address[i],
        title: $("title").text(),
      });
      i += 1;
    });
    return titles;
  });
};

module.exports = { getTitle, getTitles };
