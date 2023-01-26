const formOneSubmit = document.getElementById('formOne__submit');
const accessSubmit = document.getElementById('access__submit');

let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

formOneSubmit.addEventListener('click', e => {
    e.preventDefault();
    const email = document.getElementById('formOne__email');
    if(email.value != '' && validEmail.test(email.value)) {
        email.style.border = '1px solid #b31111';
        document.querySelector('.email-msg').style.display = 'block';
        
        setTimeout(()=> {
            email.value = ''
            email.style.border = '1px solid hsl(238, 22%, 44%)';
            document.querySelector('.email-msg').style.display = 'none';
        }, 2000);
    }
});
accessSubmit.addEventListener('click', e => {
    e.preventDefault();
    const email = document.getElementById('access__email');
    if(email.value != '' && validEmail.test(email.value)) {
        email.style.border = '1px solid #b31111';
        document.querySelector('.access__msg').style.display = 'block';
        
        setTimeout(()=> {
            email.value = ''
            email.style.border = '1px solid hsl(238, 22%, 44%)';
            document.querySelector('.access__msg').style.display = 'none';
        }, 2000);
    }
});

AOS.init();