#!/usr/local/Cellar/node/0.1.103/bin/node
// generated by npm, please don't touch!
var dep = require('path').join(__dirname, "./../../.npm/connect/0.2.4/dependencies")
var depMet = require.paths.indexOf(dep) !== -1
var from = "./../../.npm/connect/0.2.4/package/lib/connect/middleware/jsonrpc"

if (!depMet) require.paths.unshift(dep)
module.exports = require(from)

if (!depMet) {
  var i = require.paths.indexOf(dep)
  if (i !== -1) require.paths.splice(i, 1)
}
