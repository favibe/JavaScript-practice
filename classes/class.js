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


