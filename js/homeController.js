(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['homeService'];

    function homeController(homeService) {

        // list everything
        var hc = this;
        hc.addItem = addItem;
        hc.lists = homeService.lists;
        hc.items = homeService.items;
        hc.currentList = Number(homeService.currentList);
        hc.setCurrentList = setCurrentList;
        hc.keyPress = keyPress;
        hc.removeCompleted = homeService.removeCompleted;

        // public functions
        function addItem() {
            // only add item if text isn't blank
            if (hc.newItemText && hc.newItemText.trim() !== '') {
                homeService.addItem(hc.newItemText);
                hc.newItemText = '';
            }
        }

        function setCurrentList(listNum) {
            hc.currentList = homeService.currentList = Number(listNum);
        }

        function keyPress(event) {
            if (event.keyCode == 13)
            {
                hc.addItem();
            }
            else if (event.keyCode == 27)
            {
                hc.newItemText = '';
            }
        }
    }

}());
