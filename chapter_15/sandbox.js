function User_(username, email){
    this.username = username;
    this.email = email;
    // this.login = function(){
    //     console.log(`${this.username} has logged in`);
    // }
} 

User_.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;  
}

User_.prototype.logout = function(){
    console.log(`${this.username} has logged out`);  
    return this; 
}

function Admin_(username, email, title){
    User_.call(this, username, email);
    this.title = title;
}

Admin_.prototype = Object.create(User_.prototype);

Admin_.prototype.deleteUser = function(){
    //delete a user
};

class User {
    constructor(username, email){
        //set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(`user ${this.username} logged in`);
        return this;
    }

    logout(){
        console.log(`user ${this.username} logged out`);
        return this;
    }
    incScore(){
        this.score++;
        console.log(`${this.username} has scrore of ${this.score}`);
        return this;
    }
}

class Admin extends User {
    
    constructor(username,email,title){
        super(username,email);
        this.title = title;
    }

    deleteUser(user){
        users = users.filter(u => u.username !== user.username);       
    }
}

const userOne = new User('bobby', 'bbodf@mail.cri');
const userTwo = new User('bobby2', 'bbod2f@mail.cri');
const userThree = new Admin('ad','ad@masdil.com','king');

let users = [userOne,userTwo,userThree];
console.log(users);

userThree.deleteUser(userTwo);

console.log(users);

userOne.logout().login().incScore().incScore().logout();
userTwo.login();

const userFour = new User_('baby','asd');
const userFive = new Admin_('admin2','123@mail.com','king');
console.log(userFour,userFive);