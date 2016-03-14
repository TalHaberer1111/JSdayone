(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
}
// var Journal = function(entry) {
//   this.body = entry;
// };
Journal.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

// exports.Journal = Journal;
exports.Journal = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').Journal;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var entry = $("#entry").val();
    var journalEntry = new Journal(entry);
    var count = journalEntry.wordCount();
    alert(count);

  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/journal.js":1}]},{},[1]);
