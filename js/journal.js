// exports.Journal = function(entry){
//   this.body = entry;
// }
// // var Journal = function(entry) {
// //   this.body = entry;
// // };
// exports.Journal.prototype.wordCount = function() {
//   return this.body.split(" ").length;
// };
var moment = require('moment');

var Journal = function(entry){
  this.body = entry;
  this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(this.date);
};
// var Journal = function(entry) {
//   this.body = entry;
// };
Journal.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

// exports.Journal = Journal;
exports.Journal = Journal;
