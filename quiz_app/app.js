const correctAnswers = ['B','B','B','B'];

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer ===  correctAnswers[index]){
            score += 25;
        }
    });

    const result = document.querySelector('.result');
    const result_field = result.querySelector('span');

    scrollTo(0,0);
    result_field.textContent = `${score}%`;
    result.classList.replace('d-none','d-block')

    let output = 0;
    const timer = setInterval(() => {
        result_field.textContent = `${output}%`; 
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }       
    }, 10);

    // console.log(score);

});

// console.log('hello');
// window.console.log('hello');

