(function() {
	size();
	window.onresize = function() {
		size();
	}

	function size() {
		var winW = document.documentElement.clientWidth || document.body.clientWidth;
		document.documentElement.style.fontSize = (winW / 750) * 100 + "px";
	}
})()