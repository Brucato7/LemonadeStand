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
			callback(new Person());
		}
	}
	this.pushToPasserbysArray = function(object){
		this.passerbys.push(object);
	}
	this.logArray = function(array){
		for(var i = 0; i < array.length; i++){
			console.log(array[i].probabilityOfPurchase);
		}
	}
}

var myBiz = new LemonadeStand();
myBiz.generatePeople(20,myBiz.pushToPasserbysArray);
myBiz.logArray(myBiz.passerbys);