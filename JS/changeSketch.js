function changeSketch (n) {
	var text = $(n).html();
	console.log("run");
	if (text == "Pong") {
		$(".sketch").attr("src", "JS/Pong/index.html");
		$(".btn").attr("class", "btn");
		$(n).attr("class", "btn active");
	}

	if (text == "Bouncy Balls") {
		$(".sketch").attr("src", "JS/bouncers/index.html");
		$(".btn").attr("class", "btn");
		$(n).attr("class", "btn active");
	}

	if (text == "Yahtzee") {
		$(".sketch").attr("src", "JS/Yahtzee/index.html");
		$(".btn").attr("class", "btn");
		$(n).attr("class", "btn active");
	}
}

$(document).ready(function(){
	$(".btn").click(function(){changeSketch(this);});
});