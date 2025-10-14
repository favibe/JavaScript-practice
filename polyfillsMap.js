const arr = [1, 2, 3, 4, 5];
const squaredNum = arr.map((number) => number ** 2);
console.log(squaredNum);

/*To use polyfills  for  older browsers; we have to include Prototype*/
//Array.prototype.myMap : THE myMap  is  my function represebting the map function' 
function getSquared(number) {
    return number ** 2;
}
Array.prototype.myMap = function(callback) {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
        tempArr.push(callback(this[i], i, this));
    }
    return tempArr;
};

const squ = arr.myMap(getSquared);
console.log(squ);