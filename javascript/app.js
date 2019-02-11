(function (){
 
  'use strict';


var array =[{
	name: "apples",
	quantity: "2kg"},

	{name: "cake",
	quantity: "1 pound"},

	{name: "bannanas",
	quantity: "12"},

	{name: "oranges",
	quantity: "2kg"},

	{name: "chicken burger",
	quantity: "2"
	

}];


var array2=[];


angular.module('myfirstapp',[]).controller('controller1',controller1);

controller1.$inject= ['$scope','$filter'];

function controller1($scope,$filter) {

$scope.name="";
$scope.count=0;


$scope.getname= function (){
	

var tocount= countall($scope.name);


$scope.count= tocount;

};

$scope.all="danish khan"


$scope.upper= function (){


	var filter = $filter('uppercase');

  var real= filter($scope.all);



$scope.all= real;

};


$scope.increment=0;

$scope.itemss = array2;
$scope.items = array;

$scope.increments= function(){
	
	setTimeout(function() {
		
$scope.$apply(function(){
	
$scope.increment++;

});



	},2000);


};



$scope.show = function (){
	
 var data = add($scope.item ,$scope.quantity , $scope.items);

};


$scope.removes = function (index){
	
 var date = remove(index , $scope.items, $scope.itemss);


};


};






function countall(string){

 var mycount=0;

 for(var i= 0; i<string.length; i++){
 	
mycount += string.charCodeAt(i);

 }

return mycount;

};




function add(item , amount, items){



 var object = {
   name: item,
   quantity: amount
 };

 var items =items.push(object);

return items;




}



function remove(index,items,itemss){


itemss.push(items[index]);



items.splice(index, 1);

return items;

return itemss;

}



})();