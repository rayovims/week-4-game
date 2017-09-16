
var randomNumber = Math.floor(Math.random() * 100)+1;
var ruby; 
var diamond;
var pearl;
var emerald;
var wins = 0;
var losses = 0;

ruby = Math.floor(Math.random() * 20)+1;
diamond = Math.floor(Math.random() * 20)+1;
pearl = Math.floor(Math.random() * 20)+1;
emerald = Math.floor(Math.random() * 20)+1;
$("#score").html(counter);
$("#goal").html(randomNumber);

var counter = 0;
function reset() {
$("#goal").html(randomNumber = Math.floor(Math.random() * 100)+1);
counter = 0;
ruby;
diamond;
pearl;
emerald;
$("#score").html("0");
};

$("#ruby").on("click", function() {
	counter += ruby;
	$("#score").html(counter);
	decision();
	}),
$("#diamond").on("click", function() {
	counter += diamond;
	$("#score").html(counter);
	decision();
	}),
$("#pearl").on("click", function() {
	counter += pearl;
	$("#score").html(counter);
	decision();
	}),
$("#emerald").on("click", function() {
	counter += emerald;
	$("#score").html(counter);
	decision();
	});

function decision() {
if (counter === randomNumber) {
 	alert("You Win! press 'ok' to keep playing" );
 	wins++;	
 	$("#winCounter").html(wins);
 	reset();
	
 } 
 else if (counter > randomNumber) {
 	alert("CLOSE!, but not close enough :/ .... press 'ok' to try again.");
 	losses++;
 	$("#lossCounter").html(losses);
 	reset();
 }
};


window.onload = function() {
	$("#score").html("0");
	$("#winCounter").html("0");
	$("#lossCounter").html("0");


}