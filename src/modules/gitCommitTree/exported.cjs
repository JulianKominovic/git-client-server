var gitlogger = require("./gitlogger.cjs");
var gitparser = require("./gitparser.cjs");
var gitprocessor = require("./gitprocessor.cjs");
const parentsPlugin = require("./gitparser-plugin-parents.cjs");
const refnamesPlugin = require("./gitparser-plugin-refnames.cjs");
const indexPlugin = require("./gitprocessor-plugin-index.cjs");
const relationPlugin = require("./gitprocessor-plugin-relations.cjs");
const headPlugin = require("./gitprocessor-plugin-heads.cjs");

var defaultProcessorplugins = [];

module.exports = {
  logger: gitlogger,
  parser: gitparser,
  processor: gitprocessor,

  run: function (callback, maxCommits, location) {
    const parsers = [parentsPlugin, refnamesPlugin];
    var loggerCallback = function (text) {
      var commits = gitparser(text, parsers);
      indexPlugin(commits);
      relationPlugin(commits);
      // headPlugin(commits);
      callback(commits);
    };

    gitlogger.retrieve(maxCommits || 300, loggerCallback, location);
  },
};
