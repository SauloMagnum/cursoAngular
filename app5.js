(function () {
  'use strict';

  angular.module('ControllerAsApp',[])
  .controller('ShoppingListController1',ShoppingListController1)
  .controller('ShoppingListController2',ShoppingListController2)
  .factory('ShoppingListFactory',ShoppingListFactory);

  ShoppingListController1.$inject = ['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory){
    var list1 = this;
    var shoppinList = ShoppingListFactory();

    list1.items = shoppinList.getItems();
    list1.itemName="";
    list1.itemQuantity="";
    list1.addItem = function (){
      shoppinList.addItem(list1.itemName,list1.itemQuantity);
      list1.itemName = "";
      list1.itemQuantity = "";
    };

    list1.removeItem = function (ItemIndex) {
      shoppinList.removeItem(ItemIndex);
    };

  }

  ShoppingListController2.$inject = ['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory){
    var list2 = this;
    var shoppinList = ShoppingListFactory(3);

    list2.items = shoppinList.getItems();
    list2.itemName="";
    list2.itemQuantity="";
    list2.addItem = function (){
      try {
        shoppinList.addItem(list2.itemName,list2.itemQuantity);
        list2.itemName = "";
        list2.itemQuantity = "";
      } catch (e) {
        list2.errorMessage = e.message;
      }

    };

    list2.removeItem = function (ItemIndex) {
      shoppinList.removeItem(ItemIndex);
    };

  }

 function ShoppingListService(maxItems) {
   var service = this;
   var items = [];

   service.addItem = function(itemName,quantity){
     if ((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
       var item = {
          name : itemName,
          quantity:quantity
       };
       items.push(item);
     }else {
       throw new Error("Numero Maximo itens("+maxItems+") tem que ser igual a 3");
     }

   };
   service.removeItem = function (ItemIndex) {
     items.splice(ItemIndex,1);
   };
   service.getItems = function () {
     return items;
   };
  }
function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };
  return factory;
}

})();
