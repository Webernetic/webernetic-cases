import "./main.scss";
import { printList } from "./modules/printList";
import { scrollSlide } from "./modules/scrollSlide";

document.addEventListener("DOMContentLoaded", () => {
  const resultList = document.querySelector(".dev__list");
  const stackList = document.querySelector(".stack__list");
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

  printList(stackList, items.skills);
  printList(resultList, items.directions);

  scrollSlide("#prototype-track", "#prototype-thumb", ".prototype__wrapper", ".prototype__scroll");
  scrollSlide("#design-track", "#design-thumb", ".design__wrapper", ".design__scroll");
});
