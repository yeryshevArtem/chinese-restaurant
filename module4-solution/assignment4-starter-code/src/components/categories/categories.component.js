(function () {
  'use strict';
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: './src/components/categories/categories.template.html',
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
