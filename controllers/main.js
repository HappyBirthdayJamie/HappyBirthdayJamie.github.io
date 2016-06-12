(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        vm.food = 'pizza';
        vm.funcname = function () {
            alert("hello");
            vm.food = 'yum';
        }
    }
})();