#!/opt/local/bin/node
// generated by npm, please don't touch!
var dep = require('path').join(__dirname, "./../.npm/websocket-server/1.3.50/dependencies")
var depMet = require.paths.indexOf(dep) !== -1
var from = "./../.npm/websocket-server/1.3.50/package/lib/ws"

if (!depMet) require.paths.unshift(dep)
module.exports = require(from)

if (!depMet) {
  var i = require.paths.indexOf(dep)
  if (i !== -1) require.paths.splice(i, 1)
}
