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

