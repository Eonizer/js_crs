const form = document.querySelector('.signup-form');
const feedback  = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(form.username.value);
    const username = form.username.value;
    

    if(usernamePattern.test(username)){
        feedback.textContent = 'that username is valid';     
    }else{
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
    }
});

//live feedback
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        // console.log('passed');
        e.target.classList.toggle('bg-green-500',true);
        e.target.classList.toggle('bg-red-500',false);
        // console.log(e.target.classList);
    } else {
        // console.log('failed');
        e.target.classList.toggle('bg-red-500',true);
        e.target.classList.toggle('bg-green-500',false);
    }
});

// const username = 'shaunp';
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);
// // // console.log(result);

// // if(result){
// //     console.log('regex text passed');
// // }else{
// //     console.log('regex test failed');
// // }

// let result = username.search(pattern);
// console.log(result);