const numbers = [12, 34 , 43, 54, 32];
// for (number of numbers){
//     console.log(number)
// }
// 1. For of loop can not be used with objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// First option to loop through an array
const keys = Object.keys(bottle);
// console.log(keys);
/*
3 ways to read object properties
bottle.color
bottle['color']
bootle[key]
 */
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
for( const key in bottle){
    console.log(key, bottle[key]);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair)
