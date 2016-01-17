(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController)
        .filter('capitalize', function() {
        return function(input, all) {
            var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
            return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
        };
    });

    homeController.$inject = ['homeService'];

    function homeController(homeService) {

        // list everything
        var hc = this;
        hc.addItem = addItem;
        hc.lists = homeService.storage.lists;
        hc.items = homeService.storage.items;
        hc.currentList = 0;
        hc.keyPressI = keyPressI;
        hc.keyPressL = keyPressL;
        hc.addList = addList;
        hc.removeCompleted = homeService.removeCompleted;

        // public functions
        function addItem() {
            // only add item if text isn't blank
            if (hc.newItemText && hc.newItemText.trim() !== '') {
                homeService.addItem(hc.newItemText, hc.currentList);
                hc.newItemText = '';
            }
        }

        function addList() {
            // only add list if text isn't blank
            if (hc.newListText && hc.newListText.trim() !== '') {
                homeService.addList(hc.newListText);
                hc.newListText = '';
            }
        }

        function keyPressI(event) {
            if (event.keyCode == 13) {
                hc.addItem();
            }
            else if (event.keyCode == 27) {
                hc.newItemText = '';
            }
        }

        function keyPressL(event) {
            if (event.keyCode == 13) {
                hc.addList();
            }
            else if (event.keyCode == 27) {
                hc.newListText = '';
            }
        }
    }

}());
