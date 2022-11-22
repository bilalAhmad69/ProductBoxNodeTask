const {
  makeCorrectUrl,
  renderHtml,
  checkAddressParams,
} = require("../utils/common.js");
const { getTitle, getTitles } = require("../Services/promisesService");
const promisesController = (req, res) => {
  const address = req.query.address;
  if (address === undefined)
    return res.status(400).send("Bad request incorrect params or missing");

  if (typeof address === "string") {
    const url = makeCorrectUrl(address);
    getTitle(url)
      .then((title) => res.status(200).send(renderHtml([{ title, address }])))
      .catch((err) => res.status(400).send(err.message));
  } else if (typeof address === "object") {
    if (!checkAddressParams(req.query))
      return res.status(400).send("Bad request incorrect params");
    const urls = [];
    address.map((url) => {
      urls.push(makeCorrectUrl(url));
    });
    getTitles(urls, address)
      .then((titles) => res.status(200).send(renderHtml(titles)))
      .catch((err) => res.status(400).send(err.message));
  } else {
    res.status(400).send("Params must be object or string");
  }
};
module.exports = promisesController;
