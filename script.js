window.onload = function() {
    var canvas = document.getElementById("current");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FFF";
	ctx.fillRect(0, 0, 900, 672);

	var side = document.getElementById("sideSection");
	for(var i = 0; i < 70; i++) {
		var box = document.createElement("div");
		box.className = "sideBox";
		//box.appendChild(document.createTextNode("Year " + i));

		var topBox = document.createElement("div");
		topBox.className = "topMiniBox";
		topBox.appendChild(document.createTextNode("Year " + i));
		box.appendChild(topBox);

		for(var j = 1; j < 365; j++) {
			var minibox = document.createElement("div");
			minibox.className = "miniBox";
			minibox.appendChild(document.createTextNode("Day " + (j + 1)));
			box.appendChild(minibox);
		}
		side.appendChild(box);
	}
}
