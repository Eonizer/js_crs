//sync code
logToHTML(1);
logToHTML(2);

setTimeout(()=>{
    logToHTML('callback function fired');    
}, 2000);

logToHTML(3);
logToHTML(4);

//http requests
logToHTML('http requests');

const getTodos = resource => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            // logToHTML(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                //callback(undefined, data);  
                resolve(data);  
            } else if(request.readyState === 4) {
                //callback('could not fetch data', undefined);
                reject('could not fetch data');
            }
        });
        
        request.open('GET', resource);
        request.send();
    });

};

getTodos('todos/luigi.json').then(data => {
    logToHTML('promise resolved: ', data);
    return getTodos('todos/mario.json');
}).then(data => {
    logToHTML('promise 2 resolved: ', data); 
    return getTodos('todos/stas.json');
}).then(data => {
    logToHTML('promise 3 resolved: ', data);
}).catch((err) => {
    logToHTML('promise rejected: ', err); 
})

const getTodosNew = async () => {
    const response = await fetch('todos/luigis.json');

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    return data;
};

logToHTML(1);
logToHTML(2);

getTodosNew()
    .then(data => logToHTML('resolved: ', data))
    .catch(err => logToHTML('rejected: ', err.message));

logToHTML(3);
logToHTML(4);



//fetch api
// fetch('todos/luigi.json').then((response) => {
//     logToHTML('fetch resolved', response);
//     return response.json();
// }).then((data)=>{
//     logToHTML('fetch data: ',data);
// }).catch((err)=>{
//     logToHTML('fetch rejected', response);
// });












function logToHTML () {
    let log = document.querySelector('.logContainer');
    let pEl = document.createElement('p');

    for (let index = 0; index < arguments.length; index++) {
        if (index === 0){
            pEl.innerHTML += `<span class="font-bold text-red-400">${arguments[index]}</span>`    
        } else {
            pEl.innerHTML += arguments[index] + " ";
        }

        
        console.log(arguments[index]);
    }
    log.appendChild(pEl);
}