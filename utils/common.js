const makeCorrectUrl = (params) => {
  if (typeof params === "string") {
    const url = params.startsWith("www")
      ? `https:${params}`
      : `https://www.${params}`;
    return url;
  }
};

const renderHtml = (titles) => {
  if (typeof titles === "string") {
    return `<html> <head></head><body> <h1> Following are the titles of given websites: </h1><ul>
   <li>${titles}</li>
    </ul></body></html>`;
  }
  return `<html> <head></head><body> <h1> Following are the titles of given websites: </h1><ul>
${titles.map((title) => `<li>${title}</li>`)}
</ul></body></html>`;
};

module.exports = { makeCorrectUrl, renderHtml };
