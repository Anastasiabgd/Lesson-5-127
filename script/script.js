"use strict";

// HW 1

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let newArray = arr1.concat(arr2, arr3);

// console.log(newArray);



// HW 2

//  let arr = [-1, -2, -3, 4].some(number => number > 0);
//  console.log(arr);


// HW 3

// let array =[23,45,32,5,87,7,3,98];

// let minValue = array.sort((a, b) => b-a)[array.length -1];

// console.log(minValue);


// HW 4

let newElement = document.createElement('div');
newElement.setAttribute('class', 'wraper');
document.getElementById('test').appendChild(newElement);

let imageElement = document.createElement('img');
imageElement.setAttribute('scr', 'alt');
imageElement.setAttribute('scr', 'http://ocean.si.edu/sites/default/files/styles/article_main_image/public/25691336465_982637ea03_o.jpg.webp?itok=i62mC4wO');
imageElement.setAttribute('alt', 'image');
newElement.appendChild(imageElement);

let headerElement = document.createElement('h2');
headerElement.innerText = "image title";
headerElement.style.color = 'red';
headerElement.style.fontSize = '30px';
newElement.appendChild(headerElement);

