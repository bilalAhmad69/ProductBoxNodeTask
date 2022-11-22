const makeCorrectUrl = (params) => {
  if (typeof params === "string") {
    const url = params.startsWith("www")
      ? `https:${params}`
      : `https://www.${params}`;
    return url;
  }
};

const checkAddressParams = (addresses) => {
  const wrongParams = Object.keys(addresses).filter(
    (address) => address != "address"
  );
  if (wrongParams.length > 0) return false;
  return true;
};

const renderHtml = (titles) => {
  return `<html> <head></head><body> <h1> Following are the titles of given websites: </h1><ul>
${titles.map((title) => `<li>${title.address} - ${title.title}</li>`)}
</ul></body></html>`;
};

module.exports = { makeCorrectUrl, renderHtml, checkAddressParams };
