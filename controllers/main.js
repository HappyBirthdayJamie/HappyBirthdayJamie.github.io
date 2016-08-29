(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        
        for (var i = 0; i > vm.printedText.length; i++) {
        	setTimeout(function(){ vm.printedText.charAt(i) }, 500);
        }
    }
})();