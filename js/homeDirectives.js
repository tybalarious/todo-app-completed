(function(){
    'use strict';

    angular.module('homeDirectives', [])

    .directive('tdNonefound', tdNonefound) // td-nonefound
    .directive('tdAddlistbutton', tdAddlistbutton) //td-addlistbutton
    .directive('tdItem', tdItem)
    .controller('tdItemController', tdItemController);

    function tdNonefound() {
        return {
            restrict: 'A', // <tr td-nonefound>
            replace: true,
            template: '<tr><td><i>No items in this list</i></td></tr>'
        };
    }

    function tdAddlistbutton() {
        return {
            restrict: 'E', // <td-addlistbutton>
            replace: true,
            template: '<button class="btn btn-xs btn-success" ng-click="hc.addList()">add list</button>'
        };
    }
    function tdItem() {
        return {
            scope: {}, // "isolate scope"
            restrict: 'A',
            templateUrl: 'templates/tdItem.html',
            bindToController: {
                item: '=', // item and index parameters are passed straight in from HTML directive
                index: '='
            },
            controller: 'tdItemController as tc'
        };
    }

    function tdItemController() {
        var tc = this;
        //tc.index++;
    }

}());
