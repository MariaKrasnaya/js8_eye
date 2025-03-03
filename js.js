document.addEventListener("DOMContentLoaded", function() {

function handleMouseMove(event){
  let eyes = document.querySelectorAll(".eye");
  // получаем все элементы с классом .eye
  // получаем координаты центра глаза
  eyes.forEach(function(eye){
  let rect = eye.getBoundingClientRect();
  // .getBoundingClientRect() метод который
  // возвращает координаты элемента
  let eyeX = rect.left + eye.clientWidth / 2;
  let eyeY = rect.top + eye.clientHeight / 2;
  // Свойство clientWidth содержит ширину элемента внутри
  // границ вместе с padding, но без border и прокрутки
  // вычисляем угол между курсором и центром глаза
  let radiana = Math.atan2(event.clientX - eyeX, event.clientY - eyeY,);
  let rotatin = (radiana * (180/Math.PI) * -1) +180;
  eye.style.transform = `rotate(${rotatin}deg)`;
  });
};

let move_area = document.querySelector(".move_area");
move_area.addEventListener("mousemove", handleMouseMove);
    


function cursorColor(event){
  let cursor = document.querySelector(".cursor")
  cursor.style.left = `${event.pageX - 20}px`;
  cursor.style.top = `${event.pageY - 30}px`;
};
document.addEventListener("mousemove", cursorColor);
});