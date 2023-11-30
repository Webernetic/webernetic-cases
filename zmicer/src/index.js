import './main.scss';

import { createHeader } from './modules/header';
const wrapper = document.querySelector(".wrapper");

wrapper.insertAdjacentHTML("afterbegin", createHeader());

function runTitle(el) {
  let str = el.textContent;
  let a = str.slice(1);
  let b = str.slice(0, 1);
  let newStr = a + b;
  el.textContent = newStr;
}

// let s = setInterval(runTitle, 500, title)