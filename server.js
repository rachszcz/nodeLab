const quotes = require("./quotes");

"use strict";
const http = require("http");

http.createServer((req, res) => {
    // code for getting random quote goes here

const index = Math.floor(Math.random() * quotes.length); // random number as the array index
// const randomQuote = quotes[index]; // quote in index
// console.log(randomQuote);
console.log(quotes[index])

 res.writeHead(200, {"Content-type": "text/plain"});
 res.write(quotes[index]);
 res.end();
}).listen(3000);

