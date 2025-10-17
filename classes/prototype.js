/* 
*-Every OBJECT in Js have a prototype; 
which value is either null or the refernce to another objects
--* so  we can acess this prorotype and its methods
::-> __prorot___ is a reserved keyword that allows us access the protoype*/


const admin = {
    isAdmin: true,
};

const user = {
    name: "Joy",
    role: "mentor",
    __proto__: admin,
};
//can acess it's properties like this :
console.log(user.toString());