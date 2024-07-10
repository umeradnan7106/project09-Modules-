// Modules

// 1. package.json (cmd: npm init --yes)
// 2. npm i inquirer (node modules file)
// 3. npm i --save-dev @type/inquirer    (in the error)
// 4. on line no. 14 in tsconfig change "target": "es2022", 
// 5. on line no. 28 in tsconfig change "module": "NodeNext", 
// 6. on line no. 30 in tsconfig change "moduleResolution": "NodeNext", 
// 7. Add "type": "modules", in line no. 6 in package.json

import inquirer from "inquirer";

let answer = await inquirer.prompt(
[
    {
        name: "q1",
        message: "What is your name?",
        type: "input",
    },
    {
        name: "q2",
        message: "What is your gender?",
        type: "list",
        choices: ["Male" ,"Female"]
    }
]
)
console.log(answer);
console.log(`Hello ${answer.q1} how are you ? and your gender is ${answer.q2}`);

//             OR

let message = answer.q1;
let message2 = answer.q2;
console.log(`Hello ${message} how are you ? and your gender is ${message2}`)



let fruits