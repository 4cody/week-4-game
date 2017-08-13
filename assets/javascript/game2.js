var user;
var enemy;
var gameStage = "draw";
var pow = true;

var yoda = {
	attack:10,
	cAttack:25,
	hp:200,
	name:"Yoda"
};
var jengo = {
	attack:20,
	cAttack:15,
	hp:160,
	name:"Jengo Fett"
};
var wampa = {
	attack:20,
	cAttack:20,
	hp:50,
	name:"Wampa"
};
var trooper = {
	attack:20,
	cAttack:5,
	hp:180,
	name:"Forest Trooper Scout"
};

$(document).ready(function() {

	$("#restart").click(function() {
		newGame();
	});

	$("#yoda").click(function() {
		if(pow){
			$(this).removeClass("fighter");
			draw();
			user = yoda;
			$("#line1").html("Pick an enemy");
			stat();
		}
		else{
			$(this).appendTo("#opp").addClass("opponent");;
			enemy = yoda;
			stat();
		}
	});

	$("#jengo").click(function() {
		if(pow){
			$(this).removeClass("fighter");
			draw();
			user = jengo;
			$("#line1").html("Pick an enemy");
		}
		else{
			$(this).appendTo("#opp").addClass("opponent");;
			enemy = jengo;
			stat();
		}
	});

	$("#trooper").click(function() {
		if(pow){
			$(this).removeClass("fighter");
			draw();
			user = trooper;
			$("#line1").html("Pick an enemy");
		}
		else{
			$(this).appendTo("#opp").addClass("opponent");;
			enemy = trooper;	
			stat();	
		}
	});

	$("#wampa").click(function() {
		if(pow){
			$(this).removeClass("fighter");
			draw();
			user = wampa;
			$("#line1").html("Pick an enemy");
		}
		else{
			$(this).appendTo("#opp").addClass("opponent");
			enemy = wampa;				
			stat();
		}
	});

	if($('#enemies').children().length == 0 && $('#opp').children().length == 0){

	};

   //      combat  checks   
	$("#attack").click(function() {
		if(enemy.hp > 0 && user.hp > 0){
			fightCheck();
			stat();
		}
		if(enemy.hp < 0){
			if($('#enemies').children().length == 0){
				alert("You've vanquished all foes!");
			}else{
				fightCheck();
				alert("You've slain an enemy!");
				bye();
				stat();	
			}
		}
		
	});


});


function draw() {
	$(".fighter").appendTo("#enemies");
	pow = false;
};

function fightCheck(){
	user.hp = Math.round(user.hp - enemy.cAttack);
	enemy.hp = Math.round(enemy.hp - user.attack);
	user.attack = Math.round(user. attack * 1.5);
	console.log(user.hp);
	console.log(enemy.hp);
};

function bye(){
	$(".opponent").hide();
};

function stat(){
	$("#user").empty();
	$("#other").empty();
	$("#user").append(user.name + "- HP:" + user.hp + '<br>' + user.name + "- AP:" + user.attack + '<br>');
	$("#other").append(enemy.name + "- HP:" + enemy.hp + '<br>' + enemy.name + "- AP:" + enemy.attack);
};

function newGame(){
	gameStage = "draw";
	pow = true;
	$("restart").hide();
};