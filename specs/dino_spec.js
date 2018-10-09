const assert = require('assert')
const Dino = require('../dino.js')

describe("Dino", function(){

  let dino;

  beforeEach(function(){
    dino = {species: "T-rex", diet: "Herbivore", visitors: 10}
    dino2 = {species: "Brontesaurus", diet: "Carnivore", visitors: 50}

  })
  it("should have a species", function(){
    const actual = dino.species;
    assert.strictEqual(actual, "T-rex")
  })
  it("should have a diet", function(){
    const actual = dino.diet;
    assert.strictEqual(actual, "Herbivore")
  })
  it("should have a visitor number", function(){
    const actual = dino2.visitors;
    assert.strictEqual(actual, 50)
  })
});
