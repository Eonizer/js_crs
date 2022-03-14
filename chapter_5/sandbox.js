//obj literals 
// const blogs = [
//     {title: 'yo1', likes: 30},
//     {title: 'yo2', likes: 49}
// ];

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crys911@gmail.com',
//     location: 'Berlin',
//     blogs:[    
//         {title: 'yo1', likes: 30},
//         {title: 'yo2', likes: 49}],
//     login() {
//         console.log('user logged in');
//     },
//     logout() {
//         console.log('user logged out');
//     },
//     logBlogs() {
//         //console.log(this.blogs);
//         console.log('this usr has written following blogs');
//         this.blogs.forEach(blog=>{
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// user.login();
// user.logBlogs();
// user.logout();
// user.age = 35;
// console.log(user);


// console.log(user.name);

// user['name'] = 'umi';
// console.log(user['name']);
// console.log(typeof(user));

//!!!!!!!math obj
// console.log(Math.PI);
// console.log(Math.E);

// const area = 27.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //use case 

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random*100));

//!!!!!!prim values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`score 1 is ${scoreOne}, score 2 is ${scoreTwo}`);
// scoreOne = 100;
// console.log(`score 1 is ${scoreOne}, score 2 is ${scoreTwo}`);

//!!!!!!!!ref values
// const userOne = {name: 'ryu',age:30};
// const userTwo = userOne;

// console.log(userOne,userTwo);

// userOne.age = 40;

// console.log(userOne,userTwo);