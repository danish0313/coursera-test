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


angular.module('myfirstapp',[]).controller('controller1',controller1).controller('controller2',controller2);

controller1.$inject= ['$scope'];

function controller1($scope) {


$scope.items= array;

$scope.show = function (){
	
 var data = add($scope.item ,$scope.quantity , $scope.items);

};


$scope.removes = function (index){
	
 var date = remove(index, $scope.items);


};


};


controller2.$inject=['$scope'];


function controller2($scope) {
$scope.items= array;




};






function add(item , amount, items){



 var object = {
   name: item,
   quantity: amount
 };

 var items =items.push(object);

return items;




}



function remove(index,items){

items.splice(index, 1);


return items;




}




})();