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


// Polyfills for filter

const arr1 = [1,2,3,4,5,6];
function getFiltered(number){
    return number > 3
};

Array.prototype.myFilter = function(callback) {
    let temp = [];
    for (let i =0; i<this.length; i++) {
        if (callback(this[i])) {
            temp.push(this[i])
        }
    }
    return temp;
}
const fil = arr1.myFilter(getFiltered);
console.log(fil);


//polyfill for reduce

const arr2 = [1, 2, 3, 4, 5, 7];

function getSum(acc, curr) {
    return acc + curr;
};

Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue ? initialValue: this[0];
    for (let i =initialValue ? 0 : 1; i<this.length; i++){
        acc = callback.call(this, acc, this[i], i, this)
    }
    return acc
}

const redu = arr.myReduce(getSum)
console.log(redu);