const Dino = require('./dino.js')

const Park = function(name, price){
  this.name = name;
  this.price = price;
  this.dinosaurs =[]
}
module.exports = Park

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
};
Park.prototype.addDinosaur = function (animal) {
  this.dinosaurs.push(animal)
};
Park.prototype.removeDinosaur = function (dinosaur) {
  let position = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(position, 1)
};
Park.prototype.mostPopularDino = function (dinosaur1, dinosaur2) {
  if(dinosaur1.visitors > dinosaur2.visitors){
    return dinosaur1
  } else {
    return dinosaur2
  }
};
Park.prototype.speciesCheck = function(beasts, type) {
  const speciesSearch = [];
  for (let beast of beasts){
    if(beast.species === type){
      speciesSearch.push(beast)
    }
  }
  return speciesSearch;
};
Park.prototype.dailyVisits = function () {
  let total = 0
  for (let dino of this.dinosaurs){
    total += dino.visitors
  };
  return total
};
Park.prototype.annualVisits = function () {
  let total = 0
  for (let dino of this.dinosaurs){
    total += (dino.visitors)*365
  };
  return total
};
Park.prototype.annualRevenue = function () {
  let total = 0
  for (let dino of this.dinosaurs){
    total += (dino.visitors)*365*this.price
  };
  return total
};
