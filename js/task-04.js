// Счетчик состоит из спана и кнопок, которые, при клике, должны 
// увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее 
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или 
// уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtm = document.querySelector('[data-action="decrement"]');
const incrementBtm = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
// console.log(decrementBtm);
// console.log(incrementBtm);
// console.log(valueEl);

const counterValue = {
value: 0,
increment() {
    this.value += 1
},
decrement() {
    this.value -= 1
}
}

decrementBtm.addEventListener('click', function(){
    counterValue.decrement()
    valueEl.textContent = counterValue.value
})

incrementBtm.addEventListener('click', function () {
    counterValue.increment()
    valueEl.textContent = counterValue.value
})