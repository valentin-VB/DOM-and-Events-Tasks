const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handlInputEvent);

inputEl.addEventListener('blur', handelBlurEvent);

function handlInputEvent (event){
    spanEl.textContent = event.currentTarget.value;
    console.log(event)
}

function handelBlurEvent (event){
    if(event.currentTarget.value === '')
        spanEl.textContent = 'Anonymus';
}