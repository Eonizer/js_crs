console.log('dom file');

const body = document.querySelector('body');

function styleBody(){
    body.style.background = 'peachpuff';
}

function addTitle(text){
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
}

const contact = 'mario@gmail.com';

export {styleBody,addTitle,contact};