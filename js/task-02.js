const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients");



// VERSION 1

// const listItemsArray = [];

// for (const ingredient of ingredients) {
//   const listItem = document.createElement('li');
  
//   listItem.textContent = ingredient;
//   listItem.classList = 'item';
//   listItemsArray.push(listItem);
//   console.log('listItem', listItem);
//   // ingredientsEl.append(listItem); погано! багато звернень в DOM
// }

// ingredientsEl.append(...listItemsArray);

// VERSION 1.1

const listItemsArray = ingredients.map(ingredient =>{
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList = 'item';
  return listItem;
});

console.log(listItemsArray)

ingredientsEl.append(...listItemsArray);