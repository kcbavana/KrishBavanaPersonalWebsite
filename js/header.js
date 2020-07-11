const burger = document.getElementById('burger');
const ul = document.querySelectorAll('nav ul');

burger.addEventListener('click', () =>{
    ul.classList.toggle('show');
});