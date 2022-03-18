//store data in local
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

//get data from local 
let name = localStorage.getItem('name');
console.log(name, localStorage.getItem('age'));

//upd data
localStorage.setItem('name', 'luigi');
console.log(localStorage.name);

//delete from local
//localStorage.removeItem('name');
localStorage.clear();
console.log(localStorage.name);
//

//
const todos = [
    {text: 'play matiokark', author:'bob'},
    {text: 'buy matiokark', author:'aars'},
    {text: 'buyt breal', author:'beb'}
];

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));
