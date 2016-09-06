(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main($scope) {
        var vm = this;
        
        var messageText = "Hello Inspector Stewart.                 _Your birthday present was stolen by a nefarious thief.                 _We have only recently apprehended the man responsible \n(which is why you are just now hearing about this several months after  your birthday. \nSorry, we can’t all be super awesome spy people. Quit judging!).                 _Unfortunately, the thief quickly sold the item on the black market.                 _Seeing as it took us this long just to find the first clue,\nwe have decided to leave it up to you, our top spy,\nto gather more clues and find the whereabouts of the missing package.                 _Return to this website and report any intel you have gathered\nso that we can find its final location.                 _The man who originally stole the package said that he met the buyer\nin a location that was: \nround and square; hot and cold; wet and dry.";
        var a = document.getElementById("printed-text");
        
        for (var i = 0; i < messageText.length; i++) {
        	(function(i) {
	        	setTimeout(function(){ 
	        		if (messageText.charAt(i) === '_') {
	        			a.innerHTML = "";
	        		}
	        		else {
	        			a.innerHTML = a.innerHTML + messageText.charAt(i);
	        		}
	        	}, 100 * i);
        	})(i);
        }
    }
})();