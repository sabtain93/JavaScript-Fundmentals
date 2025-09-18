const Multiplier = 10.7639;

let rlSync = require('readline-sync');

console.log('Enter the length of the room in meters:')
let len = parseInt(rlSync.question(), 10);

console.log('Enter the width of the room in meters:')
let width = parseInt(rlSync.question(), 10);

let areaMeter = len * width;

let areaFt = areaMeter * Multiplier;

console.log(`The area of the room is ${areaMeter.toFixed(2)} sqaure meters (${areaFt.toFixed(2)} sqaure feet)`);
