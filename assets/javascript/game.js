var yoda = {
	attack:20,
	cAttack:20,
	hp:100,
	name:"Yoda"
};
var jengo = {
	attack:20,
	cAttack:20,
	hp:100,
	name:"Jengo Fett"
};
var wampa = {
	attack:20,
	cAttack:20,
	hp:100,
	name:"Wampa"
};
var trooper = {
	attack:20,
	cAttack:20,
	hp:100,
	name:"Forest Trooper Scout"
};

var choice;
var opponent;

$(document).ready(function(){


//   IF YODA IS CHOSEN 


	$( "#yoda" ).click(function() {
		$("#jengo, #trooper, #wampa").appendTo("#enemies"); 
		choice = yoda;
		$( "#jengo" ).click(function() {
			$("#jengo").appendTo("#opp").addClass("bad");
			opponent = jengo;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		}); 
		$( "#wampa" ).click(function() {
			$("#wampa").appendTo("#opp").addClass("bad");
			opponent = wampa;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		});
		$( "#trooper" ).click(function() {
			$("#trooper").appendTo("#opp").addClass("bad");
			opponent = trooper;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		});					
	});


//  IF JENGO IS CHOSEN


	$( "#jengo" ).click(function() {
		$("#yoda, #trooper, #wampa").appendTo("#enemies"); 
		choice = jengo;
		$( "#yoda" ).click(function() {
			$("#yoda").appendTo("#opp").addClass("bad");
			opponent = yoda;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		}); 
		$( "#wampa" ).click(function() {
			$("#wampa").appendTo("#opp").addClass("bad");
			opponent = wampa;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		});
		$( "#trooper" ).click(function() {
	
			$("#trooper").appendTo("#opp").addClass("bad");
			opponent = trooper;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		});	
	});


//   IF WAMPA IS CHOSEN


	$( "#wampa" ).click(function() {
		$("#yoda, #jengo, #wampa").appendTo("#enemies"); 
		choice = wampa;
		$( "#yoda" ).click(function() {
			$("#yoda").appendTo("#opp").addClass("bad");
			opponent = yoda;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		}); 
		$( "#trooper" ).click(function() {
			$("#trooper").appendTo("#opp").addClass("bad");
			opponent = trooper;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		});
		$( "#jengo" ).click(function() {
			$("#jengo").appendTo("#opp").addClass("bad");
			opponent = jengo;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		});	
	});


//   IF TROOPER IS CHOSEN


	$( "#trooper" ).click(function() {
		$("#yoda, #jengo, #wampa").appendTo("#enemies"); 
		choice = trooper;
		$( "#yoda" ).click(function() {
			$("#yoda").appendTo("#opp").addClass("bad");
			opponent = yoda;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		}); 
		$( "#wampa" ).click(function() {
			$("#wampa").appendTo("#opp").addClass("bad");
			opponent = wampa;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		});
		$( "#jengo" ).click(function() {
			$("#jengo").appendTo("#opp").addClass("bad");
			opponent = jengo;
			$( "#attack" ).click(function() {
				choice.hp = choice.hp - opponent.cAttack;
				opponent.hp = opponent.hp - choice.attack;
				choice.attack = choice.attack * 2; 
			});
		});	
	});

	if(opponent.hp == 0){
		$( ".bad" ).hide();
	}


});









