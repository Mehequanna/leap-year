// Back End Logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return year + " is a leap year!";
  } else {
    return year + " is not a leap year!";
  }
};

// Front End Logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
    event.preventDefault();
  });
});
