const axios = require("axios");
const async = require("async");
const { renderHtml } = require("../utils/common");
const cheerio = require("cheerio");
const getTitle = async (url) => {
  const webPage = await axios.get(url);
  const $ = cheerio.load(webPage.data);
  const title = $("title").text();
  return title;
};

const getTitles = async (urls, address, res) => {
  const titles = [];
  let $ = "";
  let i = 0;
  async.map(
    urls,
    async function (url) {
      const response = await axios.get(url);
      return response;
    },
    (err, result) => {
      if (err) return err.message;
      result.map((webPage) => {
        $ = cheerio.load(webPage.data);
        titles.push({
          address: address[i],
          title: $("title").text(),
        });
        i += 1;
      });
      res.status(200).send(renderHtml(titles));
    }
  );
};

module.exports = { getTitle, getTitles };
