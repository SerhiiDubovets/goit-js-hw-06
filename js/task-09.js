// Напиши скрипт, который изменяет цвета фона элемента <body>
//  через инлайн стиль при клике на button.change-color и выводит
//   значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const color = document.querySelector('.widget')
// const colorName = document.querySelector('.color')
// console.log(color)

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// // decrementBtm.addEventListener('click', function(){
// //   counterValue.getRandomHexColor()

// // })
// color.addEventListener("click",changeColor);
// function changeColor() {
//   color.style.backgroundColor = getRandomHexColor();
//   colorName.textContent = getRandomHexColor();
//   }

const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click",changeColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function changeColor() {
body.style.background = getRandomHexColor();
color.textContent = getRandomHexColor();
// color.style.background = '#ffffff'
}
