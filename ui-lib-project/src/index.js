import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

//create tabs 
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snack
const snackbar = new Snackbar();
snackbar.init();

const buttom = document.querySelector('button');
buttom.addEventListener('click', ()=>{
    snackbar.show('Hey :)');
});