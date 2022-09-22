const { run } = require("./exported.cjs");
const gitline = require("./gitline/ts/Main");

const git = Gitline.create().fromJSON(commits);
console.log(git);
