global._ = require("lodash");
global.superagent = require("superagent");
global.chai = require("chai");
global.expect = chai.expect;
chai.use(require("chai-json-schema"));
chai.use(require("chai-asserttype"));

console.log("----------------------------------------------");
console.log(`API Test:\tOpen Air Quality`);
console.log("----------------------------------------------");
