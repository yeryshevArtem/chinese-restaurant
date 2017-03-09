(function () {
  'use strict';
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = [];

  function SignUpController() {
    var $ctrl = this;
    $ctrl.userData = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      shortName: undefined
    };
  }

})();
