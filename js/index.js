const inputSubmit = document.querySelectorAll('.input-submit');

inputSubmit.forEach(item => {
    if(item.value === 'Get Started For Free'){
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            const inputText = document.querySelector('.sectionThree-input-text');
            const msgError = document.querySelector('.sectionThree-error');
            if(inputText.value === ''){
                inputText.style.border = '1px solid #b40909';
                msgError.classList.toggle('sectionOne-error-view');
                setTimeout(()=>{
                    inputText.style.border = '1px solid hsl(243, 87%, 12%)';
                    msgError.classList.toggle('sectionOne-error-view');
                }, 2000);
            }     
            inputText.value = '';
        });
    }else if(item.value === 'Get Started'){
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            const inputText = document.querySelector('.input-text');
            const msgError = document.querySelector('.sectionOne-error');
            if(inputText.value === ''){
                inputText.style.border = '1px solid #b40909';
                msgError.classList.toggle('sectionOne-error-view');
                setTimeout(()=>{
                    inputText.style.border = '1px solid hsl(243, 87%, 12%)';
                    msgError.classList.toggle('sectionOne-error-view');
                }, 2000);
            }     
            inputText.value = '';
        });
    }
})