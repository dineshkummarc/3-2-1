#!/opt/local/bin/node
// generated by npm, please don't touch!
var dep = require('path').join(__dirname, "./../.npm/mongodb/0.7.9/dependencies")
var depMet = require.paths.indexOf(dep) !== -1
var from = "./../.npm/mongodb/0.7.9/package/lib/mongodb/admin"

if (!depMet) require.paths.unshift(dep)
module.exports = require(from)

if (!depMet) {
  var i = require.paths.indexOf(dep)
  if (i !== -1) require.paths.splice(i, 1)
}
