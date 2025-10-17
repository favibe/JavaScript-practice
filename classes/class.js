//Class: 

class User {
    constructor(name, role,isAdmin, isLoggedIn) {
        (this.name = name),
        (this.role = role),
        (this.isAdmin = isAdmin),
        (this.isLoggedIn = isLoggedIn);
    }
    displayInfo() {
        console.log(`${this.name} is a ${this.role}`)
    }
}

const user1 = new User("Joy", "Data Ananlyst", false , true);
const user2 = new User("Fav", "Full stsck web Developer", true , true)
console.log(user1);
console.log(user2);


//inheritance
/**
 * Inheritance
 */
// Parent
class Laptop {
  constructor(ram, processor, generation) {
    this.ram = ram;
    this.processor = processor;
    this.generation = generation;
  }
}

// Child
class Dell extends Laptop {
  constructor(ram, processor, generation, modelName, price) {
    super(ram, processor, generation);
    this.modelName = modelName;
    this.price = price;
  }
  displayMessage() {
    console.log(
      `Laptop Spec:: RAM ${this.ram} - Processor ${this.processor} - ${this.generation} Gen - ModelName ${this.modelName} - Price ${this.price}`
    );
  }
}

const dell1 = new Dell("8GB", "intel", "i5", "Dell Latitude", "45000Rs");
dell1.displayMessage();