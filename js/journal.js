exports.Journal = function Journal(entry){
  this.body = entry;
}
// var Journal = function(entry) {
//   this.body = entry;
// };
Journal.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

console.log(WordCount(""));
// function WordCount(str) {
