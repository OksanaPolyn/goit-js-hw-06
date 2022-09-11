
//Напиши скрипт, который изменяет цвета фона элемента <body> 
//через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
//Для генерации случайного цвета используй функцию getRandomHexColor.

const refs = {
  changeColorBtn: document.querySelector(`.change-color`),
  color: document.querySelector(`.color`),
  body: document.querySelector(`body`),
};
refs.changeColorBtn.addEventListener(`click`, changeColorBtnClick);

function changeColorBtnClick() {
  const currentColor = getRandomHexColor();
  refs.color.textContent = currentColor;
  refs.body.style.backgroundColor = currentColor; 
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
