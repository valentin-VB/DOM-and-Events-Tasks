function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const creatBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input[type= number]');
const divEl = document.querySelector('#boxes');


creatBtnEl.addEventListener('click', handelCreateBtnClick);
destroyBtnEl.addEventListener('click', handelDestroyBtnClick);

let total = 20;


function handelCreateBtnClick(event){
  function createBoxes(amount){
    const divBoxElArray = [];
    
    for(let i = 0; i < amount; i++){
      total += 10;
      const divBoxEl = document.createElement('div');
      divBoxEl.style.width = `${total}px`;
      divBoxEl.style.height = `${total}px`;
      divBoxEl.style.backgroundColor = getRandomHexColor();
      divBoxElArray.push(divBoxEl);
    }

    divEl.append(...divBoxElArray);
  }

  return createBoxes(inputEl.value);
}


function handelDestroyBtnClick(event){
  total = 20;
  return divEl.innerHTML = '';
}
