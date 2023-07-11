(function() {
  'use strict';
  angular.module('public')
  .service('UtilsService', UtilsService);

  UtilsService.$inject = [];
  function UtilsService() {
    var utils = this;
    utils.checkForPresenceAttrs = function(obj) {
      var count = 0;
      for (var attrs in obj) {
        count++;
      }
      return count;
    }
  }
})();
