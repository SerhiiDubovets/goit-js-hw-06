const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const ingredientsAllItem = document.createElement("li");
  ingredientsAllItem.classList.add('item')
  ingredientsAllItem.textContent = element;
  ingredientsAll.append(ingredientsAllItem);
});
console.log(ingredientsAll)


