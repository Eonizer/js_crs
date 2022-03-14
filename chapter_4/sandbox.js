
// const speak = function(name = 'BoOB', time = 'bro'){
//     console.log(`good ${time} ${name}`);
// };

// // greet();
// // greet();
// // greet();

// //speak('BOB', 'morning');
// speak();
// speak('bob','night');

// // function greet(){
// //     console.log('ello there');
// // }

// function calcArea(radius){
//     return 3.14 * radius**2;
// }

// const calcArea = radius => 3.14 * radius**2;



// function greet(){
//     console.log('ello');
// }

// const greet = () => 'ello';

// console.log(calcArea(4));

// const bill = function(products, tax){
//     let total = 0;
//     for (let index = 0; index < products.length; index++) {
//         const element = products[index];
//         total += element + element * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for (let index = 0; index < products.length; index++) {
//         const element = products[index];
//         total += element + element*tax;
//     }
//     return total;
// };

// billTotal = bill([10,15,30],0.2);

// console.log(billTotal);
// let appName = 'pViewer';


// const greet = () => 'hello';
// let result1 = greet();

// console.log(result1);

// let result2 = appName.toUpperCase();

// console.log(result2);

// const myFunc = (callBackFunc) => {
//     let value = 50;
//     callBackFunc(value);
// }

// myFunc(value => {
//   console.log(value);  
// })

// let people = ['mario','wario','bobby','soggy','tobby'];

// const logPerson = (person,index) =>{
//     console.log(`${index} - hello ${person}`)
// }
// people.forEach(logPerson);
const ul = document.querySelector('.people');
const people = ['wario','bario','fernando','alonso','bobby','hank','sammy','felix'];
let html = ``;

people.forEach(person=>{
    html += `<li style = "color: purple">${person}</li>`;
})

ul.innerHTML = html;

