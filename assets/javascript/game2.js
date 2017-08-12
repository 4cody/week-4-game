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
	hp:150,
	name:"Wampa"
};
var trooper = {
	attack:20,
	cAttack:5,
	hp:180,
	name:"Forest Trooper Scout"
};

$(document).ready(function() {

	$("#yoda").click(function() {
		if(pow){
			$(this).removeClass("fighter");
			draw();
			user = yoda;
		}
		else{
			$(this).appendTo("#opp").addClass("opponent");;
			enemy = yoda;
		}
	});

	$("#jengo").click(function() {
		if(pow){
			$(this).removeClass("fighter");
			draw();
			user = jengo;
		}
		else{
			$(this).appendTo("#opp").addClass("opponent");;
			enemy = jengo;
		}
	});

	$("#trooper").click(function() {
		if(pow){
			$(this).removeClass("fighter");
			draw();
			user = trooper;
		}
		else{
			$(this).appendTo("#opp").addClass("opponent");;
			enemy = trooper;
		}
	});

	$("#wampa").click(function() {
		if(pow){
			$(this).removeClass("fighter");
			draw();
			user = wampa;
		}
		else{
			$(this).appendTo("#opp").addClass("opponent");
			enemy = wampa;
		}
	});


	$("#attack").click(function() {
		if(enemy.hp > 0 && user.hp > 0){
			fightCheck();
		}
		if(enemy.hp <= 0){
			if($('#enemies').children().length == 0){
				alert("You've vanquished all foes!");
			}else{
				alert("You've slain an enemy!");
			}
			bye();
		}
		if(user.hp <= 0){

		}
	});

	// if ($('#enemies').children().length == 0 && $("#opp").children().length == 0 &&){
	// 	alert("yes");
	// };

});


function draw() {
	$(".fighter").appendTo("#enemies");
	pow = false;
};

function fightCheck(){
	user.hp = user.hp - enemy.cAttack;
	enemy.hp = enemy.hp - user.attack;
	user.attack = user. attack * 1.7;
	console.log(user.hp);
	console.log(enemy.hp);
};

function bye(){
	$(".opponent").hide();
}

function dead(){

}
