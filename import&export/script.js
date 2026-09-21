// import a from './app.js'
// console.log(a);

import username from './app.js'; // default export can be imported with any name
import {arr} from './app.js';   //{---} inside name must be same as exported name
import lastname from './test.js';

console.log(username,lastname);
console.log(arr);