const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsAll = document.querySelector("#ingredients");
function ingredientList(ingredients) {
  return ingredients.map((element) => {
    const ingredientsAllItem = document.createElement("li");
    ingredientsAllItem.classList.add("item");
    ingredientsAllItem.textContent = element;
    return ingredientsAllItem;
  });
}
ingredientsAll.append(...ingredientList(ingredients));
console.log(ingredientsAll);
