const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().

const listIngridient = document.querySelector(`#ingredients`);
//********OLD SCHOOL - don`t use now!
//const elements = [];
// for (let i = 0 ; i< ingredients.length; i+=1) {
//   //console.log (ingredients [i]);
//   const option = ingredients [i];
//   //робимо елемент
//   const navItemEl = document.createElement(`li`);
//   // Добавит название ингредиента как его текстовое содержимое. 
//   navItemEl.textContent = `${ingredients[i]}`;
 
//   navItemEl.classList.add(`item`);  // Добавит элементу класс item.
//   // console.log(navItemEl);
//   elements.push (navItemEl)
// }
const makeListIngridient = ingredients.map(ingredient => {
  const option = ingredients [i];
  //робимо елемент
  const navItemEl = document.createElement(`li`);
  // Добавит название ингредиента как его текстовое содержимое. 
  navItemEl.textContent = `${ingredients[i]}`;
 
  navItemEl.classList.add(`item`);  // Добавит элементу класс item.
  // console.log(navItemEl);
  elements.push (navItemEl)
});


console.log(elements);
listIngridient.append (...elements)


