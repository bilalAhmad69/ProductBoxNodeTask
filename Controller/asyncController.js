const { makeCorrectUrl, renderHtml } = require("../utils/common.js");
const { getTitle, getTitles } = require("../Services/asyncService.js");
const asyncController = async (req, res) => {
  const address = req.query.address;
  try {
    if (address === undefined)
      return res.status(400).send("Bad request incorrect params or missing");

    if (typeof address === "string") {
      const url = makeCorrectUrl(address);
      const title = await getTitle(url);
      res.status(200).send(renderHtml(title));
    } else if (typeof address === "object") {
      const urls = [];
      address.map((url) => {
        urls.push(makeCorrectUrl(url));
      });
      const titles = await getTitles(urls);
      res.status(200).send(renderHtml(titles));
    } else {
      res.status(400).send("Params must be object or string");
    }
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = asyncController;
