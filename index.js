const express = require("express");
require("dotenv").config();
const { ASYNC_URL, PROMISES_URL, THEN_URL } = require("./Config/env");
const asyncRoute = require("./Routes/asyncRoute");
const thenRoute = require("./Routes/thenRoute");
const promisesRoute = require("./Routes/promisesRoute");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(process.env.ASYNC_URL, asyncRoute);
app.use(process.env.THEN_URL, thenRoute);
app.use(process.env.PROMISES_URL, promisesRoute);
app.get("*", (req, res) => {
  res.status(404).send("URL NOT FOUND");
});
app.listen(PORT, () => {
  console.log(`I am listening at port ${PORT}`);
});
