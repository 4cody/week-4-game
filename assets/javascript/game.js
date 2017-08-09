var yoda = {
	attack:20,
	cAttack:20,
	hp:100
};
var jengo = {
	attack:20,
	cAttack:20,
	hp:100
};
var wampa = {
	attack:20,
	cAttack:20,
	hp:100
};
var trooper = {
	attack:20,
	cAttack:20,
	hp:100
};

var choice;
var def;
var opp;
var pow;



$(document).ready(function(){


	$( "#yoda" ).click(function() {
		$("#jengo, #trooper, #wampa").appendTo("#enemies");
		choice=yoda;
	});


	$( "#jengo" ).click(function() {
		$("#yoda, #trooper, #wampa").appendTo("#enemies");
	});

	$( "#trooper" ).click(function() {
		$("#yoda, #wampa, #jengo").appendTo("#enemies");
	});

	$( "#wampa" ).click(function() {
		$("#yoda, #trooper, #jengo").appendTo("#enemies");
	});

	$(".fighter").click(function() {
		$(this).appendTo
	})



	// ()()()()()()()()()()()()()()()() //

	$(function() {
	    
	    $("h2")
	        .wrapInner("<span>")

	    $("h2 br")
	        .before("<span class='spacer'>")
	        .after("<span class='spacer'>");

	});


});