import { add, subtract, PI } from './math.js';
import { greet, appName } from './message.js';

console.log(greet("Ashok"));
console.log(`Welcome to ${appName}`);
console.log(`3 + 4 = ${add(3, 4)}`);
console.log(`PI = ${PI}`);
console.log(`10 - 4 = ${subtract(10, 4)}`);
