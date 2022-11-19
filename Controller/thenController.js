const { makeCorrectUrl, renderHtml } = require("../utils/common.js");
const { getTitle, getTitles } = require("../Services/thenService");
const thenController = (req, res) => {
  const address = req.query.address;
  if (address === undefined)
    return res.status(400).send("Bad request incorrect params or missing");

  if (typeof address === "string") {
    const url = makeCorrectUrl(address);
    getTitle(url)
      .then((title) => res.status(200).send(renderHtml(title)))
      .catch((err) => res.status(400).send(err.message));
  } else if (typeof address === "object") {
    const urls = [];
    address.map((url) => {
      urls.push(makeCorrectUrl(url));
    });
    getTitles(urls)
      .then((titles) => res.status(200).send(renderHtml(titles)))
      .catch((err) => res.status(400).send(err.message));
  } else {
    res.status(400).send("Params must be object or string");
  }
};
module.exports = thenController;
