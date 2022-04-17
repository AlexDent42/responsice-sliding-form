let signinBtn = document.querySelector('.signinBtn');
let signupBtn = document.querySelector('.signupBtn');
let formBx = document.querySelector('.formBx');
let body = document.querySelector('body');


signupBtn.addEventListener('click', ()=> {
    formBx.classList.add('active');
    body.classList.add('active');
    })
signinBtn.addEventListener('click', ()=>{
    formBx.classList.remove('active');
    body.classList.remove('active');
    })
