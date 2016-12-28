(function () {
  'use strict';
  angular.module('MenuApp')
  .component('itemsList', {
    templateUrl: './src/items/items-list.template.html',
    controller: ItemsComponentController,
    controllerAs: '$ctrl',
    bindings: {
      itemsList: '<'
    }
  });
  function ItemsComponentController() {
    var $ctrl = this;
  }
})();
