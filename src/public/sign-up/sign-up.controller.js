(function () {
  'use strict';
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserInfoService', '$location', '$timeout'];

  function SignUpController(UserInfoService, $location, $timeout) {
    var signUp = this;

    signUp.status = 'initial';
    signUp.userData = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      shortName: undefined
    };

    signUp.getMenuItemDetail = function () {
      var userDetail = {};
      var promise = UserInfoService.getMenuItem(signUp.userData.shortName);
      promise.then(function(menuItemDetail) {
        if (menuItemDetail.error) {
          signUp.status = 'error';
        } else {
          for (var field in signUp.userData) {
            if (field !== 'shortName') {
              userDetail[field] = signUp.userData[field];
            }
          }
          userDetail.menuItemInfo = menuItemDetail;
          UserInfoService.setUserInfo(userDetail);
          signUp.status = 'success';
          $timeout(function() {
            $location.path('/menu');
          }, 1000);
        }
      });
    }
  }

})();
