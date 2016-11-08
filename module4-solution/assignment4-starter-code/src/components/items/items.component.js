(function () {
  'use strict';
  angular.module('MenuApp')
  .component('items', {
    templateUrl: './src/components/items/items.template.html',
    controller: ItemsController,
    // controllerAs: '$ctrl',
    bindings: {
      itemsList: '<'
    }
  });
  function ItemsController() {
    var $ctrl = this;
    console.log($ctrl);
  }

})();
