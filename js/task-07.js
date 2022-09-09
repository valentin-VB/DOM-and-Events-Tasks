const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', handelInputChange);

spanEl.style.fontSize = "56px";

function handelInputChange (event){
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
