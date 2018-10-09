const assert = require('assert')
const Park = require('../park.js')
const Dino = require('../dino.js')

describe("Park", function(){

  let park;

  beforeEach(function(){
    park = new Park("David's Dino's", 10)
    dino = {species: "T-rex", diet: "Herbivore", visitors: 10}
    dino2 = {species: "Brontesaurus", diet: "Carnivore", visitors: 50}
  })

  it("should have a name", function(){
    const actual = park.name;
    assert.strictEqual(actual, "David's Dino's")
  })

  it("should have a ticket price", function(){
    const actual = park.price;
    assert.strictEqual(actual, 10)
  })

  it("should have a collection of dinosaurs", function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  })

  it("should have a dinosaur count", function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0)

  })

  it("Add a dinosaur to its collection of dinosaurs", function(){
    park.addDinosaur(dino)
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1)
  })

  it("Remove a dinosaur from its collection of dinosaurs", function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    park.removeDinosaur(dino2)
    const actual = [dino]
    const expected = park.dinosaurs
    assert.deepStrictEqual(actual, expected)
  })

  it("Find the dinosaur that attracts the most visitors", function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    const actual = park.mostPopularDino(dino, dino2)
    assert.deepStrictEqual(actual, dino2)
  })

  it("Find all dinosaurs of a particular species", function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    const actual = park.speciesCheck(park.dinosaurs, "Brontesaurus")
    assert.deepStrictEqual(actual, [dino2])
  })

  it("Calculate the total number of visitors per day", function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    const actual = park.dailyVisits()
    assert.strictEqual(actual, 60)
  })

  it("Calculate the total number of visitors per year", function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    const actual = park.annualVisits()
    assert.strictEqual(actual, 21900)
  })
  
  it("Calculate the total revenue from ticket sales for one year", function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    const actual = park.annualRevenue()
    assert.strictEqual(actual, 219000)
  })
})
