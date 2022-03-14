//for loops

// for(let i = 0; i<5;i++){
//     console.log('in loop:', i);
// }

// console.log('loop fifnished');

// const names = ['Mario','Rosaliona','Baby'];

// for (let index = 0; index < names.length; index++) {
//     //const element = names[index];
//     // console.log(`my name is ${names[index]}`);
//     let html = `<div>${names[index]}<div>`;
//     console.log(html);
// }

// console.log('while loop');

// let i = 0;
// while(i<5){
//     console.log('while loop',i);
//     i++;
// }

// let i = 5;

// do{
//     console.log(i);
//     i++;
// }while(i<5);

//if statements 
// const h = 24;

// if(h>20){
//     console.log('u are over 20 yrs old');
// }

// const ninjas = ['Shaun','Yoshi','Ninja','U'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// const password = '@';

// if(password.length >=12 && password.includes('@')){
//     console.log('that password is super cute');
// } else if(password.length >= 8 || password.includes('@')){
//     console.log('that password is strong enough');
// } else {
//     console.log("that pass in not strong enough");
// }

// logical NOT(!)

// let user = false;

// if(!user){
//     console.log('user is not logged in');
// }

// const scores = [50,20,123,69,100,4389];

// for (let index = 0; index < scores.length; index++) {
//     const element = scores[index];
    
//     if(element <= 20){
//         continue;
//     }

//     console.log(`your score is ${element}`);
    
//     if(element === 100){
//         console.log('u got the top score');
//         break;
//     }
// }

// const grade = 'D';

// switch(grade){
//     case 'A':
//         console.log('u got an A');
//         break;
//     case 'B':
//         console.log('u got B');
//         break;
//     case 'C':
//         console.log('u got C');
//         break;
//     case 'D':
//         console.log('u got D');
//         break;
//     default:
//         console.log('grade is not correct');
// }

let age = 30;

if(true){
    let age = 40;
    let name = 'Baby'
    console.log('inside code block',age,name);
}

console.log('outside code block',age,name);