import "./main.scss";
import { printList } from "./modules/printList";
import { setupScrolling } from "./modules/setupScrolling";

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
  setupScrolling(".prototype", ".prototype__scroll");
});
