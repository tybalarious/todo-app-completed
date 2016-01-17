(function(){
    'use strict';

    angular.module('homeService', [])
        .service('homeService', homeService);

    homeService.$inject = ['$localStorage'];

    function homeService($localStorage) {

        // list everything
        var hs = this;
        hs.storage = $localStorage.$default(getDefaultData());

        hs.addItem = addItem;                   // adds the given item to current list
        hs.removeCompleted = removeCompleted;   // removes all completed items from all lists
        hs.addList = addList;                   // adds another list
        hs.reset = reset;

        // public functions
        function addItem(title, currentList) {
            hs.storage.items.push(
                {
                    itemNum: hs.storage.nextItemNum++,
                    title: title,
                    listNum: currentList,
                    completed: false
                }
            );
        }

        function removeCompleted(currentList) {
            for (var i=hs.storage.items.length-1; i>=0; i--) {
                if (hs.storage.items[i].completed && hs.storage.items[i].listNum == currentList) {
                    hs.storage.items.splice(i, 1);
                }
            }
        }

        function addList(title) {
            hs.storage.lists.push({
                    title: title
                }
            );
        }

        // private functions

        function reset() {
            hs.storage.$reset(getDefaultData());
        }

        function getDefaultData() {
            return {
                nextItemNum: 1,
                nextListNum: 1,
                lists: [{
                    title: 'Today'
                },
                    {
                        title: 'Later'
                    }],
                items: [{
                    itemNum: 0,
                    title: 'Buy Mountain Dew',
                    listNum: 0,
                    completed: false
                }]
            };
        }
    }

}());