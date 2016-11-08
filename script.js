var pushPull= function (direction) {
	direction();
}
var push = function () {
  console.log("pushing it!");
};

var pull = function () {
  console.log("pulling it!");
};

pushPull(push);
pushPull(pull);