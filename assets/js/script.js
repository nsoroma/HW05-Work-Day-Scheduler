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