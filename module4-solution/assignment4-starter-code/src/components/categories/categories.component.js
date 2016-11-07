(function () {
  'use strict';
  angular.module('')
  .component('categories', {
    templateUrl: './categories.template.html',
    bindings: {
      categoriesList: '<'
    }
  });
})();
