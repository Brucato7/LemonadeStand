"use strict";
/*function startLemonadeStand(){
	console.log(document.weather);
}*/

function Person(){
	this.probabilityOfPurchase = Math.random();
}

function LemonadeStand(){
	this.passerbys = [];
	this.generatePeople = function(num, callback) {
		for(var i = 0; i < num; i++){
			var object = new Person();
			this.pushToPasserbysArray(object);
		}
	}
	this.pushToPasserbysArray = function(object){
		this.passerbys.push(object);
	}
	this.logArray = function(array){
		for(var i = 0; i < array.length; i++){
			console.log(i+1 + ": " + array[i].probabilityOfPurchase);
		}
	}
}

var myBiz = new LemonadeStand();
myBiz.generatePeople(20,myBiz.pushToPasserbysArray);
myBiz.logArray(myBiz.passerbys);