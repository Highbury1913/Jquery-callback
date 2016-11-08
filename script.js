var  getTime =function  (Fun) {
	var time= new Date();
	Fun(time);
}
var returnTime = function (time) {
  alert('The current time is: ' + time);
};

getTime(returnTime);