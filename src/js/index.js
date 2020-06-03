import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀')

const firstName ='Marcin';  
const age =30;
let years =20;


console. log('firstName');
console. log('age');
console. log(`Witam na imię Mi ${firstName} i mam ${age} lat`);

function calculate(age) {
    console.log(`Yo mam lat ${age}`);
return age*6;
}
 
const myResult = calculate(age);
console.log(myResult);


function greet(firstName,years) {
    console .log (`Witam na imię Mi ${firstName} i mam ${age} lat`);
}

greet(firstName, age);

function createContent(QuerySelectorContent, content){
    const element = document.querySelector (QuerySelectorContent);
    element.innerHTML = content;
}

createContent(`.content__js`,`Marcin Kalita` ); 

const button = document.querySelector ('.button__js--button');
console. log (button);

button.addEventListener('click', () => {
    const picture = document.querySelector (".box-head__title");
    picture.innerHTML = 'Homepage Marcin Kalita';
    picture.classList.toggle('js-klasa');
});

const menu = document.querySelector ('.menu--js');
console. log(menu);

menu.addEventListener('click', () => {
    const menu = document.querySelector (".item");
    menu.classList.toggle('item--js');
});