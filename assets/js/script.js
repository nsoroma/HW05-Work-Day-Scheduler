// Define currentDay - moment.js
var currentDay = moment().format("dddd, MMMM Do");

// Display currentDay
$("#currentDay").text(currentDay);

// Define time blocks for 9 - 5 work hours
var block9am = moment().hour(9);
var block10am = moment().hour(10);
var block11am = moment().hour(11);
var block12pm = moment().hour(12);
var block1pm = moment().hour(13);
var block2pm = moment().hour(14);
var block3pm = moment().hour(15);
var block4pm = moment().hour(16);
var block5pm = moment().hour(17);

var timeblocks = [block9am, block10am, block11am, block12pm, block1pm, block2pm, block3pm, block4pm, block5pm];

var block9am = JSON.parse(localStorage.getItem('block9am')) || "";
var block10am = JSON.parse(localStorage.getItem('block10am')) || "";
var block11am = JSON.parse(localStorage.getItem('block11am')) || "";
var block12pm = JSON.parse(localStorage.getItem('block12pm')) || "";
var block1pm = JSON.parse(localStorage.getItem('block1pm')) || "";
var block2pm = JSON.parse(localStorage.getItem('block2pm')) || "";
var block3pm = JSON.parse(localStorage.getItem('block3pm')) || "";
var block4pm = JSON.parse(localStorage.getItem('block4pm')) || "";
var block5pm = JSON.parse(localStorage.getItem('block5pm')) || "";

$.each(timeblocks, function (index, value) {
  events = [block9am, block10am, block11am, block12pm, block1pm, block2pm, block3pm, block4pm, block5pm]
  $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
      (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
      (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
      "<i class='fas fa-save' title='Save Event'></i> </i></div></div></div>");
});

