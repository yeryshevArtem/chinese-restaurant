(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['itemsList'];

  function ItemsController(itemsList) {
    var items = this;
    items.itemsList = itemsList.menu_items;
  }
})();
