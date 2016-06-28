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
	this.price = 0;
	this.cost = 0;
	this.passerbysPerDay = 0;
	this.days = 0;
	this.generatePeople = function(num, days) {
		for(var j = 0; j < days; j++){
			for(var i = 0; i < num; i++){
				var object = new Person();
				var probability = this.calculateProbabilityOfPurchase(object.probabilityOfPurchase, this.forecast[j]);
				this.pushToArray(probability, this.passerbys);
			}
		}
	}
	this.calculateProbabilityOfPurchase = function(prob, forecast){
		var probability = prob/this.price;
		probability = (forecast>75 ? probability*(forecast%75): probability*1);
		return probability;
	}
	this.pushToArray = function(object, array){
		array.push(object);
	}
	this.logArray = function(array){
		for(var i = 0; i < array.length; i++){
			console.log(i+1 + ": " + array[i]);
		}
	}
	this.getForecast = function(days){
		for(var i = 0; i < days; i++){
			this.pushToArray(document.weather.forecast[i].high, this.forecast);
		}
	}
	this.getValuesFromInput = function(){
		this.setPrice(document.getElementById('price').value);
		this.setCost(document.getElementById('cost').value);
		this.setDays(document.getElementById('numberOfDays').value);
		this.setPasserbysPerDay(document.getElementById('passerbysPerDay').value);
	}
	this.setPrice = function(newPrice){
		this.price = newPrice;
	}
	this.setCost = function(newCost){
		this.cost = newCost;
	}
	this.setPasserbysPerDay = function(newPasserbysPerDay){
		this.passerbysPerDay = newPasserbysPerDay;
	}
	this.setDays = function(newDays){
		this.days = newDays;
	}
	this.logTestItems = function(){
		console.log(this.price);
		console.log(this.cost);
		console.log(this.days);
		console.log(this.passerbysPerDay);
	}
}

var myBiz = new LemonadeStand();
myBiz.generatePeople(20);
myBiz.logArray(myBiz.passerbys);
var runSimButton = document.getElementById("runSimulation");



//runSimButton.onclick = myBiz.getForecast(5),myBiz.logArray();





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

