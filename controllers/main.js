var messageText = "Hello Inspector Stewart.                 " +
		"_Your birthday present was stolen by a nefarious thief.                 " +
		"_We have only recently apprehended the man responsible    " +
		"_(which is why you are just now hearing about this several months after your birthday.  " +
		"Sorry, we can’t all be super awesome spy people. Quit judging!).                 " +
		"_Unfortunately, the thief quickly sold the item on the black market.                 " +
		"_Seeing as it took us this long just to find the first clue, " +
		"we have decided to leave it up to you, our top spy, to gather more clues and find the " +
		"whereabouts of the missing package.                 " +
		"_The man who originally stole the package said that the buyer can be found in a location that is:                 " +
		"_Round and square, hot and cold, wet and dry.                 " +
		"\n\nWhen you discover the identity of the buyer, type his name in here:;";
var instructions = document.getElementById("printed-text-container");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var input6 = document.getElementById("input6");
var giantToe = document.getElementById("giant-toe");
var giantToe2 = document.getElementById("giant-toe2");
var index = 0;

printText();

function printText() {
	for (var i = 0; i < messageText.length; i++) {
		(function(i) {
	    	setTimeout(function(){ 
	    		if (messageText.charAt(i) === ';') {
	    			//TODO transition here
	    			for (var j = 0; j < 10; j++) {
	    				(function(j) {
	    			    	setTimeout(function(){ 
	    			    		instructions.setAttribute("style", "margin-top:" + (16 - j) + "%; margin-bottom: 2%;");
	    			    	}, 50 * j);
	    				})(j);
	    			}
	    			changeOpacity(1);
	    			//TODO set focus
	    		}
	    		if (messageText.charAt(i) === '_') {
	    			index = i + 1;
	    			instructions.innerHTML = "";
	    		}
	    		else {
	    			instructions.innerHTML = messageText.substring(index, i);
	    		}
	    	}, 75 * i + 1000);
		})(i);
	}
}

function checkInput() {
	if (input1.value === "J") {
		if (input2.value === "O") {
			if (input3.value === "H") {
				if (input4.value === "N") {
					changeOpacityDown(0, true);
					moveDaPlane(61, 48, 4, 17);
				}
			}
		}
	}
	if (input1.value === "N") {
		if (input2.value === "A") {
			if (input3.value === "T") {
				if (input4.value === "H") {
					if (input5.value === "A") {
						if (input6.value === "N") {
							changeOpacityDown(0, true);
							moveDaPlane2(48.5, 82.5, 17, 26.5);
						}
					}
				}
			}
		}
	}
	if (input1.value === "O") {
		if (input2.value === "R") {
			if (input3.value === "E") {
				if (input4.value === "G") {
					if (input5.value === "O") {
						if (input6.value === "N") {
							changeOpacityDown(0, true);
							moveDaPlane3(82.5, 60, 26.5, 49);
						}
					}
				}
			}
		}
	}
}

function moveDaPlane(topStart, top, leftStart, left) {
	var topValue = topStart;
	var leftValue = leftStart;
	
	for (var i = 0; i < (topStart - top); i += 0.5) {
		(function(i) {
	    	setTimeout(function(){ 
	    		topValue = topStart - i;
	    		leftValue = leftStart + i;
	    		giantToe.setAttribute("style", "left: " + leftValue + "%; " +
	    				"top: " + topValue + "%");
	    		if (i + 0.5 === topStart - top) {
	    			showSecondText();
	    			changeOpacity(false, true);
	    			printText();
	    			setTimeout(function(){ 
	    				giantToe2.setAttribute("style", "opacity: 1");
	    				setTimeout(function(){
	    					giantToe2.setAttribute("style", "opacity: 0");
	    				}, 2000);
	    			}, 6500);
	    		}
	    	}, 50 * i);
		})(i);
	}
}

function moveDaPlane2(topStart, top, leftStart, left) {
	var topValue = topStart;
	var leftValue = leftStart;
	
	for (var i = 0; i < (top - topStart); i += 0.5) {
		(function(i) {
			setTimeout(function(){ 
				topValue = topStart + i;
				leftValue = leftStart + i/3;
				giantToe.setAttribute("style", "left: " + leftValue + "%; " +
						"top: " + topValue + "%");
				if (i + 0.5 === top - topStart) {
					showThirdText();
	    			changeOpacity(false, true);
	    			printText();
				}
			}, 50 * i + 1000);
		})(i);
	}
}

function showThirdText() {
	instructions.innerHTML = "";
	messageText = "";
	input1.value ="";
	input2.value ="";
	input3.value ="";
	input4.value ="";
	input5.value ="";
	input6.value ="";
		messageText = "_What you thought the plane would go to Europe?          " +
				"_There are British dudes in South America.\nYou got a problem with that?           " +
				"_After calling us a mini fucking hitler for bringing him in\n" +
				"_Nathan told us that he also sold the present.             " +
				"_He said he remembers the event well because they had to reschedule 3 times.        " +
				"_First his car broke down.  Then he tried to ride his backup horse but it had died unexpectedly.       " +
				"_Anyway, he told us the location in the form of a riddle. (what a douche).   " +
				"_I have arms but I am not a person.  The next clue is in my crack.;";
}

function moveDaPlane3(topStart, top, leftStart, left) {
	var topValue = topStart;
	var leftValue = leftStart;
	
	for (var i = 0; i < (topStart - top); i += 0.5) {
		(function(i) {
	    	setTimeout(function(){ 
	    		topValue = topStart - i;
	    		leftValue = leftStart + i + 0.05;
	    		giantToe.setAttribute("style", "left: " + leftValue + "%; " +
	    				"top: " + topValue + "%");
	    		if (i + 0.5 === topStart - top) {
	    			showFinalText();
	    			changeOpacity(false, true);
	    			printText();
	    		}
	    	}, 50 * i);
		})(i);
	}
}

function showFinalText() {
	instructions.innerHTML = "";
	messageText = "";
	input1.value ="";
	input2.value ="";
	input3.value ="";
	input4.value ="";
	input5.value ="";
	input6.value ="";
		messageText = "_Alright so it looks like they were all working together this whole time.          " +
				"_If you examine the clues you should find your present.  Enjoy!   ";
}


function showSecondText() {
	instructions.innerHTML = "";
	input1.value ="";
	input2.value ="";
	input3.value ="";
	input4.value ="";
	input5.value ="";
	input6.value ="";
	messageText = "Yeah so our airplane looks like a flying red toe with nail fungus.                                        " +
			"_So What?  Want to fight about it?  I drew it on the airplane with no mouse.          " +
			"_John told us he no longer has the present either.          " +
			"_He sold it to a very douchey English man" +
			"\nHe met the man at the pub by the playhouse and apothocary.;";
}

function changeOpacity(value, stuff) {
	//TODO Transition Here
	for (var i = 0; i < 10; i++) {
		(function(i) {
	    	setTimeout(function(){
	    		if (value) {
					input1.setAttribute("style", "opacity: ." + i);
					input2.setAttribute("style", "opacity: ." + i);
					input3.setAttribute("style", "opacity: ." + i);
					input4.setAttribute("style", "opacity: ." + i);
					input5.setAttribute("style", "opacity: ." + i);
					input6.setAttribute("style", "opacity: ." + i);
	    		}
				if (stuff) {
					instructions.setAttribute("style", "opacity: ." + i);
				}
	    	}, 50 * i);
		})(i);
	}
	input1.focus();
}

function changeOpacityDown(value, stuff) {
	//TODO Transition Here
	input1.setAttribute("style", "opacity: " + 0);
	input2.setAttribute("style", "opacity: " + 0);
	input3.setAttribute("style", "opacity: " + 0);
	input4.setAttribute("style", "opacity: " + 0);
	input5.setAttribute("style", "opacity: " + 0);
	input6.setAttribute("style", "opacity: " + 0);
	if (stuff) {
		instructions.setAttribute("style", "opacity: " + 0);
	}
}

