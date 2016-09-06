(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main($scope) {
        var vm = this;
        
        var messageText = "Hello Inspector Stewart.  Your birthday present was stolen by a nefarious thief.  We have only recently apprehended the man responsible (which is why you are just now hearing about this several months after your birthday.  Sorry, we can’t all be super awesome spy people.  Quit judging!).  Unfortunately, the thief quickly sold the item on the black market.  Seeing as it took us this long just to find the first clue, we have decided to leave it up to you, our top spy, to gather more clues and find the whereabouts of the missing package.  Return to this website and report any intel you have gathered so that we can find its final location.  The man who originally stole the package said that he met the buyer in a location that was round and square; hot and cold; wet and dry.";
        var a = document.getElementById("printed-text");
        
        $scope.printedText = "no";
        
        for (var i = 0; i < messageText.length; i++) {
        	setTimeout(function(){ 
        		if (a.innerHTML !== undefined) {
        			console.log(messageText.charAt(i));
        			a.innerHTML = a.innerHTML + messageText.charAt(i);
        		}
        		else {
        			console.log(messageText.charAt(i));
        			a.innerHTML = messageText.charAt(i);
        		}
        	}, 300 * i);
        }
    }
})();