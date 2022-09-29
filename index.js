const studentInfo = require('./information');

/*console.log(`Hello, I'm ${studentInfo.name} and I'm from ${studentInfo.campus} campus`);*/

const cowsay = require("cowsay");

console.log(cowsay.think({
    text: `Hello, I'm ${studentInfo.name} and I'm from ${studentInfo.campus} campus`,
    e: "@@",
    T: "lJ "
}));
