// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { isArray } = require("@vue/shared");

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


// const circle = {nof
//   label: 'circleX',
//   radius: 2,
// };
//
// const circleArea = ({ radius }) =>
//   (PI * radius * radius).toFixed(2);
//
// console.log(
//   circleArea(circle)
// );


const [first, ...rest] = [1,2,3,4]
console.log(isArray(first))
console.log(rest)
console.log(isArray(rest))

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;
console.log(temp1);
console.log(person)

const newArray = [...rest]
console.log(newArray)

const newObject = {
  ...person,
}
console.log(newObject)