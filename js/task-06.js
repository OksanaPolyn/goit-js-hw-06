// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

//***getAttribute() возвращает значение указанного атрибута элемента.
// Если элемент не содержит данный атрибут, могут быть возвращены null или "" (пустая строка)



const inputRef = document.querySelector(`#validation-input`);
//console.log (inputRef);

const inputRefLength =inputRef.getAttribute(`data-length`);

//EventTarget.addEventListener() регистрирует определённый обработчик события, вызванного на EventTarget.
inputRef.addEventListener(`blur`, onInputBlur);
//
function onInputBlur (event) {
    const isValid = event.currentTarget.value.length === Number (inputRefLength);

    if (isValid) {
        event.currentTarget.classList.add (`valid`);
        event.currentTarget.classList.remove (`invalid`);
    } else {
        event.currentTarget.classList.remove (`valid`);
        event.currentTarget.classList.add (`invalid`);
    }
}



