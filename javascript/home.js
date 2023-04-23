const toggleBtn = document.getElementById('toggle-btn')
const navLinks = document.getElementById('nav-links')
const CloseBtn = document.getElementById('close');


//dropdown icons for questions 
const arrowOne = document.getElementById('arrow-one');
const arrowTwo = document.getElementById('arrow-two');
const arrowThree = document.getElementById('arrow-three');
const arrowFour = document.getElementById('arrow-four');
const arrowFive = document.getElementById('arrow-five');
const arrowSix = document.getElementById('arrow-six');

// questions sections
const faqOne = document.getElementById('faq-item-one');
const faqTwo = document.getElementById('faq-item-two');
const faqThree = document.getElementById('faq-item-three');
const faqFour = document.getElementById('faq-item-four');
const faqFive = document.getElementById('faq-item-five');
const faqSix = document.getElementById('faq-item-six');

// for toggling questions
arrowOne.addEventListener('click', ()=>{
    faqOne.classList.toggle('active');
    arrowOne.classList.toggle('active');
})

arrowTwo.addEventListener('click', ()=>{
    faqTwo.classList.toggle('active');
    arrowTwo.classList.toggle('active');
})

arrowThree.addEventListener('click', ()=>{
    faqThree.classList.toggle('active');
    arrowThree.classList.toggle('active');
})

arrowFour.addEventListener('click', ()=>{
    faqFour.classList.toggle('active');
    arrowFour.classList.toggle('active');
})

arrowFive.addEventListener('click', ()=>{
    faqFive.classList.toggle('active');
    arrowFive.classList.toggle('active');
})

arrowSix.addEventListener('click', ()=>{
    faqSix.classList.toggle('active');
    arrowSix.classList.toggle('active');
})


// for toggle button on navbar
toggleBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
})

CloseBtn.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
})