(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('MenuAppController', MenuAppController);

  MenuAppController.$inject = ['MenuDataService', 'categoriesList', '$stateParams'];

  function MenuAppController(MenuDataService, categoriesList, $stateParams) {
    var menuapp = this;
    menuapp.categoriesList = categoriesList;
    menuapp.itemsList = MenuDataService.getItemsForCategory($stateParams.shortNameOfCategory);
  }
})();
