global._ = require("lodash");
global.fs = require("fs-extra");
global.PNG = require("pngjs").PNG;
global.pixelmatch = require("pixelmatch");
global.chai = require("chai");
global.expect = chai.expect;
global.playwright = require("playwright");
global.browserType = process.env.BROWSER;
global.environment = process.env.NODE_ENV;

console.log("----------------------------------------------");
console.log(`Browser:\t${browserType}`);
console.log("----------------------------------------------");

global.actualScreenShotPath = `screenshots/${browserType}/actual/`;
global.baselineScreenShotPath = `screenshots/${browserType}/baseline`;
global.diffScreenShotPath = `screenshots/${browserType}/diff`;
fs.ensureDirSync(actualScreenShotPath);
fs.ensureDirSync(baselineScreenShotPath);
fs.ensureDirSync(diffScreenShotPath);
