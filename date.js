module.exports = getDate;


function getDate() {
var today = new Date();
    
var currentDay = today.getDay().toString();
var currentDate = today.getDate().toString();
var currentMonth = today.getMonth().toString();

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var day_let = days[currentDay];
var month_let = months[today.getMonth()];
var day = day_let +", "+ month_let + " " + currentDate;


return day;

};