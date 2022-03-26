//rest parameter
function double(...nums){
    
    return nums.map(num => num*2);
}

const result = double(1,23,2345,5,2,5,7,8,3,2);
console.log(result);

//spread syntax (arrays)
const people = ['stas','ryu','crystal'];
console.log(...people);

const members = ['mario','chun-li',...people];
console.log(members);

//spread syntax (obj)
const person = {name: 'stas', age: 30, job:'bob'};
const personClone = {...person, locarion: 'man'};

console.log(personClone);

//sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

const namesSet = new Set(namesArray);
console.log(namesSet);

const uniqueNames = [...namesSet];
console.log(uniqueNames);

const uniqueNames_ = [...new Set(namesArray)];
console.log(uniqueNames_);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(25);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(25));

ages.clear();
console.log(ages);

const ninjas = new Set(
    [
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age: 31}
    ]
);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
});

//symbols
const symbolOne = Symbol('a generic name here');
const symbolTwo = Symbol('a generic name here');

console.log(symbolOne, symbolTwo, typeof(symbolOne));
console.log(symbolOne === symbolTwo);

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'black';
ninja.belt = 'red';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);
