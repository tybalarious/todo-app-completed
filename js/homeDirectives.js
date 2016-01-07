(function(){
    'use strict';

    angular.module('homeDirectives', [])

    .directive('tdNonefound', tdNonefound) // td-nonefound
    .directive('tdAddlistbutton', tdAddlistbutton) //td-addlistbutton
    .directive('tdItem', tdItem);

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
            restrict: 'A',
            templateUrl: 'templates/tdItem.html',
            //template: `<td>{{ index }}</td>
            //        <td>
            //            <label class="item-label" ng-class="{ 'completed-item': item.completed }">
            //                <input type="checkbox" ng-model="item.completed"> {{ item.title }}</label>
            //        </td>`,
            scope: {
                item: '=',
                index: '='
            }
        };
    }


}());
