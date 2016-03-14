var Journal = require('./../js/journal.js').Journal;
var moment = require('./../js/journal.js').moment;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var entry = $("#entry").val();
    var journalEntry = new Journal(entry);
    var count = journalEntry.wordCount();
    alert(count);
  $('#time').text(moment());
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').append('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
