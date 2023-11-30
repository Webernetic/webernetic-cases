import "./main.scss";

import { createHeader } from "./modules/header";
const wrapper = document.querySelector(".wrapper");
const resultList = document.querySelector(".result__list");
const aboutList = document.querySelector(".about__list");

const items = {
  skills: ["CSS 3", "Wordpress", "PHP", "javascript", "HTML5", "Figma"],
  directions: [
    "Project Manager",
    "Backend разработчик",
    "Frontend разработчик",
    "Тестировщик",
    "Дизайнер",
  ],
};

wrapper.insertAdjacentHTML("afterbegin", createHeader());

function runTitle(el) {
  let str = el.textContent;
  let a = str.slice(1);
  let b = str.slice(0, 1);
  let newStr = a + b;
  el.textContent = newStr;
}

function createItem(str) {
  return `<li>${str}</li>`;
}

function printList(el, items) {
  return el.insertAdjacentHTML(
    "afterbegin",
    items.map((text) => createItem(text)).join("")
  );
}

printList(aboutList, items.skills);
printList(resultList, items.directions);

// let s = setInterval(runTitle, 500, title)
