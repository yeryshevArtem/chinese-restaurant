(function () {
  "use strict";
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController (ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.nameOfTable = "toBuyList";
    toBuy.listOfProducts = ShoppingListCheckOffService.getProducts(toBuy.nameOfTable);
    toBuy.buyProduct = function (productIndex) {
      ShoppingListCheckOffService.removeProduct(productIndex);
    }
  }
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.nameOfTable = "boughtList";
    alreadyBought.listOfProducts = ShoppingListCheckOffService.getProducts(alreadyBought.nameOfTable);
  }


  function ShoppingListCheckOffService () {
    var service = this;
    var toBuyList = [
      { name: "cookies", quantity: 100 },
      { name: "potatoes", quantity: 1000 },
      { name: "pasta", quantity: 200 },
      { name: "candies", quantity: 500 },
      { name: "nuts", quantity: 100 },
      { name: "strawberry", quantity: 10 }
    ];
    var boughtList = [];
    service.addProductsToBoughtList = function (product) {
      boughtList.push(product);
    }
    service.getProducts = function (nameOfTable) {
      return (nameOfTable === 'toBuyList') ? toBuyList : boughtList;
    }
    service.removeProduct = function (productIndex) {
      boughtList.push(toBuyList[productIndex]);
      toBuyList.splice(productIndex, 1);
    }
  }
})();
