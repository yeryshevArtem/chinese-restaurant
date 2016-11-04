(function () {
  "use strict";
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController (ShoppingListCheckOffService) {
    var itemAdder = this;
    itemAdder.getListToBuy = function () {
      return ShoppingListCheckOffService.getList();
    }
  }
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var bought = this;
    bought.list = [];
  }
  function ShoppingListCheckOffService () {
    var toBuy = this;
    toBuy.list = [
      { name: "cookies", quantity: 100 },
      { name: "potatoes", quantity: 1000 },
      { name: "pasta", quantity: 200 },
      { name: "candies", quantity: 500 },
      { name: "nuts", quantity: 100 },
      { name: "strawberry", quantity: 10 }
    ];
    toBuy.getList = function () {
      return toBuy.list;
    }
  }
})();
