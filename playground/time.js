
var moment = require('moment');



//Jan 1st 1970 00:00:10 am

// var date = new Date();
// var months = ['jan', 'Feb']
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm:ss a'));
