let idContentChange = document.querySelector('#frist');
idContentChange.innerHTML = 'id text changed';

let classContentChange = document.querySelector('.frist');
classContentChange.style = 'background-color:red';
let listFromUl = document.querySelector('.listFromUl');
let listFromli = document.querySelector('.listFromli');
listFromUl.appendChild(listFromli);
classContentChange.remove();
let olClass = document.querySelector('.olClass');
console.log(olClass);
// removing last child from an HTML elemebt
olClass.removeChild(olClass.lastElementChild);

//modifing attribute of an html element in js
let cngAttribute = document.querySelector('.cngAttribute');
cngAttribute.setAttribute('src', 'attributechanged.com')
console.log(cngAttribute.attributes.src.value);

cngAttribute.className = 'new_class';
console.log(cngAttribute.className);
cngAttribute.classList.remove('new_class');
console.log(cngAttribute);
let text1 = document.querySelector('.text1');
let btn = document.querySelector(".button");
const textCng = (e) => {
    console.log(e);

    text1.innerHTML = "<h1>changed lorem text</h1>";
}
const borderCng = () => {
    btn.style.border = '2px solid blue'
}
document.querySelector(".button").addEventListener('click', textCng);
document.querySelector(".button").addEventListener('mouseover', borderCng);


