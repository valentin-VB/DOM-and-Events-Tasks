const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', handelBlurEvent);

function handelBlurEvent(event) {
    const inputStringLength = event.currentTarget.value.length;
    const requireInputLength = inputEl.getAttribute('data-length');

    if(inputStringLength < requireInputLength){
        inputEl.classList.add('invalid');

    } else if (inputStringLength >= requireInputLength){
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')  
    }    
}
