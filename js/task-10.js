// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает
// один параметр - число. Функция создает столько <div>,
// сколько указано в amount и добавляет их в div#boxes.

//1. Размеры самого первого <div> - 30px на 30px.
//2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй
// готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.
const ref = {
  input: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
  createBtm: document.querySelector("[data-create]"),
  destroyBtm: document.querySelector("[data-destroy]"),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
ref.createBtm.addEventListener("click", () => createBoxes(ref.input.value));
ref.destroyBtm.addEventListener("click", destroyBoxes);

let boxSize = 30;

function createBoxes(element) {
  const box = [];
  for (let i = 0; i < element; i += 1) {
    box.push(
      `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
    );
    boxSize += 10;
  }
  ref.boxes.insertAdjacentHTML("afterbegin", box.join("&nbsp"));
}

function destroyBoxes() {
  ref.input.value = "";
  ref.boxes.innerHTML = "";
  boxSize = 30;
}
