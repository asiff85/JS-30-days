let clickMeBtn = document.querySelector('.clickMeBtn');
let lorem20 = document.querySelector('.lorem20');
clickMeBtn.addEventListener('click', () => {
    lorem20.innerHTML = 'Text changed from lorem20'
})

let MineImg = document.querySelector('.MineImg');
MineImg.addEventListener('dblclick', () => {
    if (MineImg.style.display === 'none') {
        MineImg.style.display = 'block';
    }
    else {
        MineImg.style.display = 'none';

    }
})

let backgroundColorChange = document.querySelector('.backgroundColorChange');
backgroundColorChange.addEventListener('mouseover', () => {
    backgroundColorChange.style = 'background-color:white';
    backgroundColorChange.style.color = 'black';
})
backgroundColorChange.addEventListener('mouseout', () => {
    backgroundColorChange.style = 'background-color:black';
    backgroundColorChange.style.color = 'white';
})

let input1 = document.querySelector('.input1');
input1.addEventListener("keydown", (e) => {
    console.log(`key pressed: ${e.key}`);
})

let input2 = document.querySelector('.input2');
let changeParagraph = document.querySelector('.changeParagraph');
input2.addEventListener('keyup', (e) => {
    changeParagraph.innerHTML = `current value by e.target.value: ${e.target.value} current value by input2.value:${input2.value}`
})

// Add a submit event listener to a form that prevents the default submission and logs the form data to the console

let form1 = document.querySelector('.form1');
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form1);
    console.log(formData);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);

})
// Add a change event listener to a select dropdown that displays the selected value in a paragraph
let dropdown = document.querySelector('.dropdown');
let dropdownParagraph = document.querySelector('.dropdownParagraph');

dropdown.addEventListener('change', () => {
    dropdownParagraph.innerHTML = `Selected value: ${dropdown.value}`
})

// Add a click event listener to a list that logs the text content of the clicked list item using event delegation
let delegationClass = document.querySelector('.delegationClass');
let addList = document.querySelector('.addList');
addList.addEventListener('click', () => {
    let newItem = document.createElement('li');
    newItem.innerHTML = 'Next JS';
    delegationClass.appendChild(newItem);
})
delegationClass.addEventListener('click', (e) => {
    if (e.target.matches('li')) {
        console.dir(e.target.innerText);

    }


})
