
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const elementBtn = document.querySelector("#counter");
const decrementBtn = elementBtn.firstElementChild;
const incrementBtn = elementBtn.lastElementChild;
const counterValue = document.querySelector("#value");
let counter = 0;
decrementBtn.addEventListener("click", countDecrement);
incrementBtn.addEventListener("click", countIncrement);
function countDecrement() {
  counter -= 1;
  counterValue.textContent = counter;
}
function countIncrement() {
  counter += 1;
  counterValue.textContent = counter;
}