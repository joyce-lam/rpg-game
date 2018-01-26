//Define character's attributes

var characters = {
	harryPotter: {
		healthPoints: 200,
		attackPower: 20,
		counterAttackPower: 30
	},
	voldemort: {
		healthPoints: 500,
		attackPower: 50,
		counterAttackPower: 50
	},
	malfroy: {
		healthPoints: 250,
		attackPower: 25,
		counterAttackPower: 35
	},
	dementor: {
		healthPoints: 150,
		attackPower: 15,
		counterAttackPower: 20
	}
};





function pickCharacter() {
	$(".characterimage").on("click", function(){
		var characterValue = parseInt($(this).data("value")); 
		if (characterValue === 1) {
			$("#chosen-character").html('<img src="assets/images/harrypotter.jpg">');
		} else if (characterValue === 2) {
			$("#chosen-character").html('<img src="assets/images/voldemort.jpeg">');
		} else if (characterValue === 3) {
			$("#chosen-character").html('<img src="assets/images/malfoy.jpg">');
		} else if (characterValue === 4) {
			$("#chosen-character").html('<img src="assets/images/dementor.jpg">');
		}
	});
}

pickCharacter();






// function attack() {

// }



// function restart() {
// 	$("restart").on("click", function(){
// 		$("      ").empty;
// 	})
// }