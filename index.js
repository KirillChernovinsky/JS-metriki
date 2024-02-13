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


