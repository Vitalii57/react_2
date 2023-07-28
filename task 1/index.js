// const timeHour = document.querySelector(".time__hour");
// const timeMinute = document.querySelector(".time__minute");
// const timeSecond = document.querySelector(".time__second");

// // const timeHourTwo = document.querySelector(".time__hour-two");
// // const timeMinuteTwo = document.querySelector(".time__minute-two");
// // const timeSecondTwo = document.querySelector(".time__second-two");

// const buttonStart = document.querySelector(".button__start");
// const buttonStop = document.querySelector(".button__stop");
// const buttonPause = document.querySelector(".button__pause");
// const inputNumber = document.querySelector(".input__number");
// let timerFinalTime = document.querySelector(".timer__final_time");

// let timerInput = document.getElementById("time"); // Берём строку
// let buttonRun = document.getElementById("button"); // Берём кнопку запуска
// let timerShow = document.getElementById("timer"); // Берём блок для показа времени

// buttonRun.addEventListener("click", function () {
//   timeMinut = parseInt(timerInput.value) * 60;
// });

// timer = setInterval(function () {
//   seconds = timeMinut % 60; // Получаем секунды
//   minutes = (timeMinut / 60) % 60; // Получаем минуты
//   hour = (timeMinut / 60 / 60) % 60; // Получаем часы
//   // Условие если время закончилось то...
//   if (timeMinut <= 0) {
//     // Таймер удаляется
//     clearInterval(timer);
//     // Выводит сообщение что время закончилось
//     alert("Время закончилось");
//   } else {
//     // Иначе
//     // Создаём строку с выводом времени
//     let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
//     // Выводим строку в блок для показа таймера
//     timerShow.innerHTML = strTimer;
//   }
//   --timeMinut; // Уменьшаем таймер
// }, 1000);

//-----------------------------

// const timeHour = document.querySelector(".time__hour");
// const timeMinute = document.querySelector(".time__minute");
// const timeSecond = document.querySelector(".time__second");

// // const timeHourTwo = document.querySelector(".time__hour-two");
// // const timeMinuteTwo = document.querySelector(".time__minute-two");
// // const timeSecondTwo = document.querySelector(".time__second-two");

// const buttonStart = document.querySelector(".button__start");
// const buttonStop = document.querySelector(".button__stop");
// const buttonPause = document.querySelector(".button__pause");
// const inputNumber = document.querySelector(".input__number");
// let timerFinalTime = document.querySelector(".timer__final_time");

// // let timeIntervalHour = setInterval((hour) => {
// //   timeHour.textContent = hour -= 1;
// // }, 1000*60*60);

// // let timeIntervalMinute = setInterval((minute) => {
// //   timeMinute.textContent = minute -= 1;
// // }, 1000*60);

// // let timeIntervalSecond = setInterval((second) => {
// //   timeSecond.textContent = second -= 1;
// // }, 1000);

// // console.log(hour);

// // const intervalHour = (hour) => {
// //   hour -= 1;
// //   timeSecond.textContent = hour;
// // };

// // const intervalMinute = () => {
// //   minute -= 1;
// //   timeSecond.textContent = minute;
// // };

// const createTimes = new Promise((resolve, reject) => {
//   addEventListener("change", () => {
//     const arryaNum = inputNumber.value.match(/\d\d/g);
//     const dataTime = {};

//     dataTime.hour = timeHour.textContent = Number(arryaNum[0]);
//     dataTime.minute = timeMinute.textContent = Number(arryaNum[1]);
//     dataTime.second = timeSecond.textContent = Number(arryaNum[2]);

//     console.log(arryaNum);

//     resolve(dataTime);
//   });
// }).then((dataTime2) => {
//   let second = dataTime2.second;
//   let minute = dataTime2.minute;
//   let hour = dataTime2.hour;

//   buttonStart.addEventListener("click", () => {
//     const onClickTimer = new Promise((resolve, reject) => {
//       dataTime2.timerS = setInterval(() => {
//         if (second != 0) {
//           second -= 1;
//           timeSecond.textContent = second;
//         } else if (second <= 0) {
//           let g = (second = 60);
//         }
//       }, 1000);
//     }).then(() => {
//       if (timeSecond.textContent == 0) {
//         dataTime2.timerM = setInterval(() => {
//           minute -= 1;
//           timeMinute.textContent = minute;
//           console.log(minute);
//         }, 1000 * 60);
//       }
//     });
//   });

  // console.log(dataTime2);
  // return new Promise((resolve, reject) => {

  // if () {

  // if (timeSecond.textContent == 0) {
  //   dataTime2.timerM = setInterval(() => {
  //     minute -= 1;
  //     timeMinute.textContent = minute;
  //     console.log(minute);
  //   }, 1000 * 60);
  // }

  // } else if () {

  //   dataTime2.timerM = setInterval(() => {
  //     if (minute <= 0) {
  //       clearInterval(dataTime2.timerM);
  //       // dataTime2.timer
  //       alert("Время закончилось");
  //     } else {
  //       minute -= 1;
  //       timeSecond.textContent = minute;
  //     }
  //   }, 1000);

  // } else if () {

  //   dataTime2.timerH = setInterval(() => {
  //     if (hour <= 0) {
  //       clearInterval(dataTime2.timerH);
  //       // dataTime2.timer
  //       alert("Время закончилось");
  //     } else {
  //       hour -= 1;
  //       timeSecond.textContent = hour;
  //     }
  //   }, 1000);
  // }
  // });
// });
// .then((dataTime3) => {
//   console.log(dataTime3);
//   buttonStart.addEventListener("click", () => {
//     dataTime3.timerS;
//     // dataTime3.timerM;
//     // dataTime3.timerH;
//   });
// });

// let = setInterv = (f) => {
//   // console.log(f)
//   setTimeout(setInterv, 1000, --f);
//   // console.log(f)
// };

// setTimeout(setInterv, 1000, 8);

// const gg = setInterval((e) => {
//   e +=1
//   // console.log(e)
// }, 1000);

// console.log(gg(5))

// buttonStart.addEventListener("click", () => {
//   console.log('fff')
//   setInterval = (() => intervalSecond(), 1000);
// });

// let intervalSecond = (s) => (s -= 1);

// console.log(intervalSecond(59));

// let timeIntervalHour = setInterval(() => intervalHour, 1000 * 60 * 60);

// let timeIntervalMinute = setInterval(() => intervalMinute, 1000 * 60);

// // let timeIntervalSecond = setInterval(() => intervalSecond, 1000);

// buttonStart.addEventListener("click", () => {
//   setInterval = (() => intervalSecond(second), 1000);
// });

// dataTime2.timeoutHour = (h) => {
//   h -= 1;
//   timeSecond.textContent = h;
// };

// dataTime2.timeoutMinute = (m) => {
//   m -= 1;
//   timeSecond.textContent = m;
// };

// dataTime2.timeoutSecond = (s) => {
//   s -= timeSecond.textContent = s;
//   console.log(s);

//   // let timeOut = setTimeout(timeoutSecond, 1000, --s);

//   // if (s == 0) {
//   //   clearTimeout(timeOut);
//   // }
// };


let array = ['audi','бмв', 'ваз'];

array.unshift('лексус')

console.log(array)

console.log(typeof(undefined))
console.log(typeof(null))

console.log(undefined/null)

console.log(undefined/null)
