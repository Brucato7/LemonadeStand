"use strict";
function startLemonadeStand(){
	console.log(document.weather);
}


function Person(){
	this.probabilityOfPurchase = Math.random();
}

function LemonadeStand(){
	this.passerbys = [];
	this.forecast = [];
	this.generatePeople = function(num) {
		for(var i = 0; i < num; i++){
			var object = new Person();
			this.pushToArray(object, this.passerbys);
		}
	}
	this.pushToArray = function(object, array){
		array.push(object);
	}
	this.logArray = function(array){
		for(var i = 0; i < array.length; i++){
			console.log(i+1 + ": " + array[i].probabilityOfPurchase);
		}
	}
	this.getForecast = function(days){
		for(var i = 0; i < days; i++){
			this.pushToArray(document.weather.forecast[i].high, this.forecast);
		}
	}
}

var myBiz = new LemonadeStand();
myBiz.generatePeople(20);
myBiz.logArray(myBiz.passerbys);






/* The Run Simulation Button needs to:
	1. Trigger the getForecast Function based on numberOfDays Input value
	2. Generate Passerbys based on numberOfDays input value and averageNumOfPasserbys input value
	3. Calculate the probability of each person purchasing a lemonade (if(>75)Prob*(rand/price %75) else rand/price * 1 )
	4. Generate a table that includes:
		a. Day #
		b. # of passerbys
		c. # of lemonades sold
		d. Profit (number of lemonades sold * (price - cost to make))

*/

