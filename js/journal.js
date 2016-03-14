// exports.Journal = function(entry){
//   this.body = entry;
// }
// // var Journal = function(entry) {
// //   this.body = entry;
// // };
// exports.Journal.prototype.wordCount = function() {
//   return this.body.split(" ").length;
// };
var Journal = function(entry){
  this.body = entry;
};
// var Journal = function(entry) {
//   this.body = entry;
// };
Journal.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

// exports.Journal = Journal;
exports.Journal = Journal;

var date = new Date ('2016/3/14');
var datestring = moment(date.add({day: 1, months: 6}).format('1');
console.log(datestring);
