/*
// EXAMPLE: VIOLATES SUBSTITUTION PRINCIPLE
class Reptile {
    constructor(name) {
        this.name = name;
    }
    get move() {
        return `${this.name} crawls away`;
    }
}
  
// Lizard inherits `move` because it crawls
class Lizard extends Reptile {}
  
//  Snake overrides `move` because it cannot crawl
class Snake extends Reptile {
    get move() {
        return `${this.name} slithers away`;
    }
}

let tricky = new Reptile("Tricky");
let basilisk = new Snake("Basilisk");

console.log(tricky.move); // => "Tricky crawls away"
console.log(basilisk.move); // => "Basilisk slithers away"
*/

// EXAMPLE: UPHOLDS SUBSTITUTION PRINCIPLE
class Reptile {
    constructor(name) {
        this.name = name;
    }
}
  
// legless reptiles slither
class LeglessReptile extends Reptile {
    move() {
        return `${this.name} slithers away`;
    }
}

// legged reptiles crawl
class LeggedReptile extends Reptile {
    move() {
        return `${this.name} crawls away`;
    }
}
  
class Lizard extends LeggedReptile {}
class Snake extends LeglessReptile {}

let tricky = new Lizard("Tricky");
let basilisk = new Snake("Basilisk");

console.log(tricky.move()); // => "Tricky crawls away"
console.log(basilisk.move()); // => "Basilisk slithers away"
