(function() {
  'use strict';
  angular.module('public')
  .service('UserInfoService', UserInfoService);

  UserInfoService.$inject = ['$http', 'ApiPath', 'UtilsService'];

  function UserInfoService($http, ApiPath, UtilsService) {
    var userInfo = this;
    var userDetailInfo = {};

    userInfo.setUserInfo = function(userDetail) {
      userDetailInfo = userDetail;
    }
    
    userInfo.getMenuItem = function(categoryShortName) {
      var config = {
        method: 'GET',
        url: ApiPath + '/menu_items/' + categoryShortName + '.json'
      };
      return $http(config).then(function(result) {

        return result.data;
      }).catch(function(error) {
        return error.data;
      });
    }

    userInfo.getUserInfo = function() {
      if (UtilsService.checkForPresenceAttrs(userDetailInfo) === 0) {
        return null;
      } else {
        return userDetailInfo;
      }
    }

  }
})();
