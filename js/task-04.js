const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');

decrementButtonEl.addEventListener('click', handldecrementButtonEl);
incrementButtonEl.addEventListener('click', handlincrementButtonEl)

let counterValue = 0;

function handlincrementButtonEl(event){
    counterValue += 1;
    spanEl.textContent = counterValue;
}

function handldecrementButtonEl(event){
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

