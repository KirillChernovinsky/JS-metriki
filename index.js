// Задачи для решения (вска в другом файле)

//1
// let element = document.getElementById('elem')
// element.classList.add('www')

//2
// element.classList.remove('www')


//3
// elem.classList.add('www')
// if (elem.classList.contains('www')) {
//     console.log('Элемент содержит класс www');
// } else {
//     console.log('Элемент не содержит класс www');
// }

//4

// if (elem.classList.contains('www')) {
//     element.classList.remove('www')
// } else {
//     element.classList.add('www')
// }


// 5 

// let elem = document.getElementById("elem");
// let classList = elem.classList;
// let classCount = classList.length;
// console.log(classCount);


// 6 
// let elem = document.querySelector("#elem");
// let classes = elem.classList;

// classes.forEach(function(className) {
//     alert(className);
// });


// Работа с CSS

// 1
// let elem = document.getElementById("elem");
// elem.style.cssText = "color: red; font-size: 30px; border: 1px solid black;";

//Свойтво tagname
// 1

// let elem = document.querySelector('#elem')

// elem.addEventListener('click', function(){
//     console.log(elem.tagName);
// })


// // 2 
// let elem = document.querySelector('#elem')

// elem.addEventListener('click', function(){
//     console.log(elem.tagName.toLocaleLowerCase());
// })


// 3
// let elements = document.querySelectorAll('.www');

// elements.forEach(element => {
//     let tagName = element.tagName.toLowerCase();
//     element.classList.add(`${element.classList[0]}-${tagName}`);
// });


// Вставка эелементов через appendChild

//1
// let elem = document.getElementById('olId');


// let liElement = document.createElement('li');
// liElement.textContent = 'пункт';


// elem.appendChild(liElement);


// 2


// let ul = document.querySelector("ul");
// let array = ["1", "2", "3"];

// for (let i = 0; i < array.length; i++) {
//   let li = document.createElement("li");
//   li.textContent = array[i];
//   ul.appendChild(li);
// }


// вставка элементов через inserAdjacentHTML

// 1
// let elem = document.getElementById("elem");


// let spanElement = document.createElement("span");
// spanElement.textContent = "!";


// elem.insertAdjacentHTML("beforebegin", spanElement.outerHTML);


// 2

// let elem = document.getElementById("elem");


// let spanElement = document.createElement("span");
// spanElement.textContent = "!!!";


// elem.insertAdjacentHTML("afterend", spanElement.outerHTML);


// 3

// let elem = document.getElementById("elem");

// let spanElement = document.createElement("span");
// spanElement.textContent = "!";
// elem.insertAdjacentElement("beforebegin", spanElement);

// 4

// let elem = document.getElementById("elem");

// let spanElement = document.createElement("span");
// spanElement.textContent = "!";
// elem.insertAdjacentElement("afterend", spanElement);


// Удаление и клонирование 

// 1
// document.getElementById("btn").addEventListener("click", function() {
//   let parent = document.getElementById("parent");
//   let child = document.getElementById("child");
//   parent.removeChild(child);
// });

// 2

// document.getElementById("btn").addEventListener("click", function() {
//     let parent = document.getElementById("ol");
//     let child = document.getElementById("child");
//     console.log(child)
//     parent.removeChild(child);
//   });

// 3


// const element = document.getElementById("myElement");

// element.addEventListener("click", function() {
//   element.remove();
// });


// 4

// let myList = document.getElementById('myList');


// let listItems = myList.getElementsByTagName('li');

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('click', function() {
//     this.remove();
//   });
// }


// 5 

// function cloneInput() {
//     var input = document.getElementById("inputField");
//     var clonedInput = input.cloneNode(true);
//     document.body.appendChild(clonedInput);
// }

// Потомки

// 1
// window.onload = function() {
//     let elem = document.getElementById('elem');
//     elem.firstElementChild.classList.add('red');
// };

// 2
// window.onload = function() {
//     let elem = document.getElementById('elem');
//     elem.lastElementChild.classList.add('red');
// };

// 3

// window.onload = function() {
//     let elem = document.getElementById('elem');
//     let descendants = elem.getElementsByTagName("*");

// for (let i = 0; i < descendants.length; i++) {
//   descendants[i].innerHTML += "!";
// }
// };

// Соседи
// 1

// let elem = document.getElementById('elem');
// let prevSibling = elem.previousElementSibling;
// prevSibling.innerHTML = prevSibling.innerHTML + '!';


// 2

// let elem = document.getElementById('elem');
// let prevSibling = elem.nextElementSibling;
// prevSibling.innerHTML = prevSibling.innerHTML + '!';


// 3

// let elem = document.getElementById('elem');
// let prevSibling = elem.nextElementSibling;
// let prevprevSilbling = prevSibling.nextElementSibling
// prevprevSilbling.innerHTML = prevprevSilbling.innerHTML + '!';



// родители

// 1
// let elem = document.getElementById('elem');
// let parent = elem.parentNode;
// parent.style.color = 'red';

// 2

// let elem = document.getElementById('elem');
// let parent = elem.parentNode;
// let parentparent = parent.parentNode;
// parentparent.style.color = 'red';

// На величину границы
// 1

// function borde() {
//     let elem = document.getElementById("elem");
//     let style = getComputedStyle(elem);
//     let borderTopWidth = style.getPropertyValue("border-top-width");
//     alert("Толщина" + borderTopWidth);
//   }


//2
// function borde() {
//     let elem = document.getElementById("elem");
//     let style = getComputedStyle(elem);
//     let borderLeftWidth = style.getPropertyValue("border-left-width");
//     alert("Толщина" + borderLeftWidth);
//   }


// на полный размер элемента

//1
// function calculateThickness() {
//     let elem = document.getElementById("elem");
//     let totalWidth = elem.offsetWidth;
//     console.log("Total Width: " + totalWidth + "px");

// }


// 2

// function calculateThickness() {
//     let elem = document.getElementById("elem");
//     let totalHeight = elem.offsetHeight;
//     console.log("Total Height: " + totalHeight + "px");
// }

// На размер эелемента без границ, но с padding

// 1 

// function calculateThickness() {
//     let elem = document.getElementById('elem');
//     let width = elem.clientWidth;
    
//     let style = getComputedStyle(elem);
//     let paddingX = parseInt(style.paddingLeft) + parseInt(style.paddingRight);
    
//     let thicknessX = width + paddingX;
//     console.log('height: ' + thicknessY);
//   }


// 2

// function calculateThickness() {
//     let elem = document.getElementById('elem');
//     let height = elem.clientHeight;
    
//     let style = getComputedStyle(elem);
//     let paddingY = parseInt(style.paddingTop) + parseInt(style.paddingBottom);
    
//     let thicknessY = height + paddingY;
    
//     console.log('height: ' + thicknessY);
//   }



// Работа с getComputedStyle

// 1
// let elem = document.getElementById('elem');
// let computedStyle = getComputedStyle(elem);

// let width = parseInt(computedStyle.width, 10); // для указания системы счистления
// let height = parseInt(computedStyle.height, 10);

// console.log('Ширина:', width);
// console.log('Высота:', height);


// Прокрутка эелемента

//1

// let button = document.getElementById('scrollButton');
// let elem = document.getElementById('elem');

// button.addEventListener('click', function() {
//   console.log('scrollHeight:', elem.scrollHeight);
// });

// 2

// let button = document.getElementById('scrollButton');
// let elem = document.getElementById('elem');

// button.addEventListener('click', function() {
//   console.log('scrollTop:', elem.scrollLeft);
// });

//3 
// let button = document.getElementById('scrollButton');
// let elem = document.getElementById('elem');

// button.addEventListener('click', function() {
//   console.log('scrollTop:', elem.scroll);
// });

// 4

// document.getElementById('scrollButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollTop = 100;
// });

// 5

// document.getElementById('scrollButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.scrollHeight = 100;
// });


// Прокрутка страницы

// 1

// document.getElementById('scrollButton').addEventListener('click', function() {
//     let scrollAmount = window.pageYOffset;
//     alert('Прокручено: ' + scrollAmount + ' px');
//   });

// 2

// document.getElementById('scrollButton').addEventListener('click', function() {
//     let scrollAmount = window.pageXOffset;
//     alert('Прокручено: ' + scrollAmount + ' px');
//   });


// Прокрутка страницы

//1
// function pos() {
//     window.scrollTo({
//       top: 500,
//       left: 300,
//       behavior: 'smooth' // Для плавной прокрутки
//     });
//   }
//2

// function pos() {
//     window.scrollTo({
//       down: 300,
//       behavior: 'smooth' // Для плавной прокрутки
//     });
//   }



// Практика 

// 1
document.getElementById("button").addEventListener("click", function(){
    window.scrollTo(0,document.body.scrollHeight);
  });


// 2
function scrollPageUp() {
    window.scrollBy(0, -400);
  }


// 3

// window.onscroll = function() {
//     if (isPageScrolledToBottom()) {
//         scrollPageUp();
//     }
// };

// function scrollPageUp() {
//     window.scrollBy(0, -100);
// }

// function isPageScrolledToBottom() {
//     return window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
// }


// 4 

// let element = document.querySelector("#elem");

// element.addEventListener("click", function() {
//   let Width = element.offsetWidth;
//   let Height = element.offsetHeight;

//   element.style.width = (Width * 2) + "px";
//   element.style.height = (Height * 2) + "px";
// });