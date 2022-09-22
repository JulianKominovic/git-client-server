var gitlogger = require("./gitlogger.cjs");
var gitparser = require("./gitparser.cjs");
var gitprocessor = require("./gitprocessor.cjs");
var defaultParserplugins = [
  require("./gitparser-plugin-refnames.cjs"),
  require("./gitparser-plugin-parents.cjs"),
];

var defaultProcessorplugins = [
  require("./gitprocessor-plugin-relations.cjs"),
  require("./gitprocessor-plugin-heads.cjs"),
  require("./gitprocessor-plugin-index.cjs"),
];

module.exports = {
  logger: gitlogger,
  parser: gitparser,
  processor: gitprocessor,
  parserplugins: defaultParserplugins,
  processorplugins: defaultProcessorplugins,

  run: function (callback, maxCommits) {
    var parserplugins = this.parserplugins;
    var processorplugins = this.processorplugins;
    var loggerCallback = function (text) {
      var commits = gitparser(text, parserplugins);
      gitprocessor(commits, processorplugins);

      callback(commits);
    };

    gitlogger.retrieve(maxCommits || 300, loggerCallback);
  },
};
