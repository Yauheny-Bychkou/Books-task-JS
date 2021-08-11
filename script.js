"use strict";
const books = document.querySelectorAll(".books"),
  book = document.querySelectorAll(".book"),
  advertisement = document.querySelector(".adv"),
  underList = document.querySelectorAll("ul"),
  listItem = document.querySelectorAll("li"),
  newElem = document.createElement("li"),
  nameBook = document.querySelectorAll("a");
books[0].prepend(book[2]);
books[0].prepend(book[5]);
books[0].prepend(book[3]);
books[0].prepend(book[4]);
books[0].prepend(book[0]);
books[0].prepend(book[1]);

document.body.style.backgroundImage = "url(../image/you-dont-know-js.jpg)";
nameBook[4].textContent = "Книга 3. this и Прототипы Объектов";
advertisement.remove();
underList[0].prepend(listItem[10]);
underList[0].prepend(listItem[2]);
underList[0].prepend(listItem[9]);
underList[0].prepend(listItem[7]);
underList[0].prepend(listItem[5]);
underList[0].prepend(listItem[4]);
underList[0].prepend(listItem[8]);
underList[0].prepend(listItem[6]);
underList[0].prepend(listItem[3]);
underList[0].prepend(listItem[1]);
underList[0].prepend(listItem[0]);

listItem[47].after(listItem[55]);
listItem[55].after(listItem[49]);
listItem[49].after(listItem[50]);
listItem[48].after(listItem[52]);
listItem[52].after(listItem[53]);
newElem.textContent = "Глава 8: За пределами ES6";
listItem[25].after(newElem);
