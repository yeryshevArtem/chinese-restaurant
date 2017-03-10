(function () {
  'use strict';
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuItemsService', '$location', '$timeout'];

  function SignUpController(MenuItemsService, $location, $timeout) {
    var signUp = this;

    signUp.status = 'initial';
    signUp.userData = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      shortName: undefined
    };

    signUp.setItem = function () {
      var promise = MenuItemsService.setMenuItem(signUp.userData.shortName);
      promise.then(function(result) {
        if (result.error) {
          signUp.status = 'error';
        } else {
          signUp.status = 'success';
          $timeout(function() {
            $location.path('/menu');
          }, 1000);
        }
      });
    }
  }

})();
