// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
//Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//В результате при перетаскивании ползунка будет меняться размер текста.


const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, onChangeSize);
function onChangeSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

