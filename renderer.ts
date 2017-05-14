// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.



import Greeter from './js/greeter';

console.log("Should build and then run with F5")

let greeter = new Greeter("World");
greeter.greet();

setTimeout(() => {
    greeter.withdraw();
}, 1000);

