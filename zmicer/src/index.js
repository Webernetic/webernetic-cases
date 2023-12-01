import "./main.scss";
import { printList } from "./modules/printList";

document.addEventListener("DOMContentLoaded", () => {
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

  printList(aboutList, items.skills);
  printList(resultList, items.directions);

  const prototypeSection = document.querySelector(".prototype__scroll");

  let isScroll = false;
  window.addEventListener('scroll', () => {
    let scrollPosition = Math.ceil(window.scrollY);


    prototypeSection.addEventListener("scroll", () => {
      let scroll = Math.ceil(prototypeSection.scrollTop);
      let countHeight = prototypeSection.scrollHeight;
      let hiddenHeight = prototypeSection.clientHeight;


      if (scroll === countHeight - hiddenHeight) {
        isScroll = true;
      } else if (scroll === 0) {
        isScroll = false;
      }
    })

  })
})
