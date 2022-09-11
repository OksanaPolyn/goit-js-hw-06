// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.



const itemEl1 =  document.querySelector(`#categories`);

const numberOfList = itemEl1.children.length;

// console.log (`Elements =`, numberOfList);

const items = document.querySelectorAll (`.item`);
// console.log (`Elements =`, items);

items.forEach(item=> {
    const titleCategory = item.querySelector(`h2`);
    const quantyItem = item.querySelectorAll (`li`);
    console.log (`category: ${titleCategory.textContent}`) 
    console.log (`Elements: ${quantyItem.length}`);
})

