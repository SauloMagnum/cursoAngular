(function () {
  'use strict';

  angular.module('ShoppingListApp',[])
  .controller('ShoppingListAddController',ShoppingListAddController)
  .controller('ShoppingListShowController',ShoppingListShowController)
  .service('ShoppingListService',ShoppingListService);

  ShoppingListAddController.$inject = ['ShoppingListService'];
  function ShoppingListAddController(ShoppingListService){
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "" ;

    itemAdder.addItem = function (){
      ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
      itemAdder.itemName = "";
      itemAdder.itemQuantity = "";
    }
  }

  ShoppingListShowController.$inject = ['ShoppingListService'];
  function ShoppingListShowController(ShoppingListService){
    var showList = this;
    showList.items = ShoppingListService.getItems();

    showList.removeItem = function (ItemIndex) {
      ShoppingListService.removeItem(ItemIndex);
    };
  }

 function ShoppingListService() {
   var service = this;
   var items = [];
   service.addItem = function(itemName,quantity){
      var item = {
         name : itemName,
         quantity:quantity
      };
      items.push(item);
   };
   service.removeItem = function (ItemIndex) {
     items.splice(ItemIndex,1);
   };
   service.getItems = function () {
     return items;
   };
  }


})();
