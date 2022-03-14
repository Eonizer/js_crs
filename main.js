const heart = document.querySelector('.heart');

heart.addEventListener('click', e => {
    if(heart.getAttribute('fill') === 'none'){
        heart.setAttribute('fill', 'currentColor');
    } else {
        heart.setAttribute('fill', 'none');
    }
});