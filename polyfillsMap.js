const arr = [1, 2, 3, 4, 5];
const squaredNum = arr.map((number) => number ** 2);
console.log(squaredNum);

/*To use polyfills  for  older browsers; we have to include Prototype*/
//Array.prototype.myMap : THE myMap  is  my function represebting the map function' 