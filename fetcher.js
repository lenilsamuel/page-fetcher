let inputArr = process.argv.slice(2);
const url = inputArr[0];
const path = inputArr[1];
const fs = require("fs");
const request = require("request");

const writeToFile = function (path, body) {
  fs.writeFile(path, body, (err) => {
    if(err) console.log(err);
  });
  console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
};

const getDataFromFile = function (url, path, functionToRunWhenThingsAreDone) {
  request(url, (error, response, body) => {
    functionToRunWhenThingsAreDone(path, body);
  });
};

getDataFromFile(url, path, writeToFile);
