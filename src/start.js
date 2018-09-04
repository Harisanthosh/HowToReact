//Using Modularity to reuse private / public
import * as m from "./math"
import { mod } from "./math"
//Also use Destructuring to import add and subtract
// import { sub, mul } from "./math"
//For importing third party modules dont give relative path

//import sayHello from './hello'
//you can also import single default exports as any name of your choice
import Hello from './hello'

console.log(m.sub(50, 20))
console.log(m.mul(50, 20))
console.log(mod(40, 4))
//sayHello();
Hello();

