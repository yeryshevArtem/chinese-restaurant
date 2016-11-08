(function () {
  'use strict';
  angular.module('data')
  .component('categories', {
    templateUrl: './src/components/categories/categories.template.html',
    bindings: {
      categoriesList: '<'
    }
  });
})();
