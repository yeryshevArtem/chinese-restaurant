(function () {
  'use strict';
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: './src/categories/categories.template.html',
    controller: CategoriesController,
    controllerAs: '$ctrl',
    bindings: {
      categoriesList: '<'
    }
  });

  function CategoriesController() {
    var $ctrl = this;
  }
})();
