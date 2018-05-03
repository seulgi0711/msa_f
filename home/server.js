const express = require("express");
const server = express();
const axios = require("axios");
const request = require("request");

const getContents = url => {
  /* return axios.get(url).then((res)=> {
        return res.data;
    }) */
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) return resolve("Error loading " + url + ": " + error.message);

      return resolve(body);
    });
  });
};

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  Promise.all([
    getContents("http://localhost:8080"),
    getContents("http://localhost:8081"),
    getContents("http://localhost:8082")
  ]).then(responses => {
    res.render("index", {
      header: responses[0],
      list: responses[1],
      cart: responses[2]
    });
  });
});

const port = process.env.PORT || 18081;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});
