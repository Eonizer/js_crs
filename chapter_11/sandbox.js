//dates & times
const now = new Date();
// console.log(now);
// console.log(typeof(now));
logToHTML('new date obj: ',now);
logToHTML('typeof date: ',typeof(now));

//year, months, day, times,
logToHTML('getFullYear: ', now.getFullYear());
logToHTML('getMonth: ', now.getMonth());
logToHTML('getDate: ', now.getDate());
logToHTML('getDay: ', now.getDay());
logToHTML('getHours: ', now.getHours());
logToHTML('getMinutes: ', now.getMinutes());
logToHTML('getSeconds: ', now.getSeconds());

//timestamps
logToHTML('timestamp: ', now.getTime());

//date strings
logToHTML('now.toDateString(): ', now.toDateString());
logToHTML('now.toLocaleTimeString(): ', now.toLocaleTimeString());
logToHTML('now.toLocaleString(): ', now.toLocaleString());

//timestamps
const before = new Date('February 1 2019 7:30:59');
logToHTML('now.getTime() before.getTime(): ', now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
logToHTML('now.getTime() - before.getTime(): ', diff);

const mins = Math.round(diff/1000/60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);
logToHTML('Math.round(diff/1000/60) Math.round(mins/60) Math.round(hours/24):', mins, hours, days);
logToHTML(`The blog was written ${days} ago`);

//converting timestamps in date obj
const timestamp = 1675938474990;
logToHTML('new Date(1675938474990): ', new Date(timestamp));

//clock
const clock = document.querySelector('.clock');

//date_fns
const tmstmp = new Date(732462363);
logToHTML('dateFns.isToday(732462363): ',dateFns.isToday(tmstmp));

//formatting options
logToHTML('dateFns.format(732462363,"YYYY"): ',dateFns.format(tmstmp,'YYYY'));
logToHTML('dateFns.format(732462363,"MMM"): ',dateFns.format(tmstmp,'MMM'));
logToHTML('dateFns.format(732462363,"dddd"): ',dateFns.format(tmstmp,'dddd'));
logToHTML('dateFns.format(732462363,"Do"): ',dateFns.format(tmstmp,'Do'));
logToHTML('dateFns.format(732462363,"dddd, Do, MMMM, YYYY"): ',dateFns.format(tmstmp,'dddd, Do, MMMM, YYYY'));

//comparing dates
const before_a = new Date('February 1 2019 12:00:00');
logToHTML('dateFns.distanceInWords(now, before_a, {addSuffix:true}): ',dateFns.distanceInWords(now, before_a, {addSuffix:true}));

const tick = () => {
    const now = new Date();
    
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const spanTmpt = '<span class="bg-green-300 p-1 rounded-md">';

    const html = `
        ${spanTmpt}${h}</span>:${spanTmpt}${m}</span>:${spanTmpt}${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick,1000);

function logToHTML () {
    let log = document.querySelector('.logContainer');
    let pEl = document.createElement('p');

    for (let index = 0; index < arguments.length; index++) {
        if (index === 0){
            pEl.innerHTML += `<span class="font-bold text-red-400">${arguments[index]}</span>`    
        } else {
            pEl.innerHTML += arguments[index] + " ";
        }
    }

    log.appendChild(pEl);
}