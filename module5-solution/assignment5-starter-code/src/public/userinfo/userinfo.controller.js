(function() {
  'use strict';
  angular.module('public')
  .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['userDetailInfo', 'ApiPath'];

  function UserInfoController(userDetailInfo, ApiPath) {
    var userInfo = this;
    userInfo.apiPath = ApiPath;
    userInfo.detailInfo = userDetailInfo;
  }
})();
