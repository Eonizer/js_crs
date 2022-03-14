const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <div class="delete">
                <svg class="delete" xmlns="http://www.w3.org/2000/svg" width="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </li>
    `;

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    // console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    } 
});

const filterTodos = (term) => {
    // Array.from(list.children)
    //     .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    //     .forEach((todo) => todo.classList.add('filtered'));

    // Array.from(list.children)
    //     .filter((todo) => todo.textContent.toLowerCase().includes(term))
    //     .forEach((todo) => todo.classList.remove('filtered'));
    Array.from(list.children).forEach((todo) => {
        if (todo.textContent.toLowerCase().includes(term)){
            todo.classList.remove('filtered');    
        } else {
            todo.classList.add('filtered'); 
        }
    })
}

//searh keyup
search.addEventListener('keyup', e => {
    const term = e.target.value.trim().toLowerCase();
    filterTodos(term);
    //console.log(term);
});