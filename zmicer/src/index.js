import "./main.scss";
import { printList } from "./modules/printList";
import { setupScrolling } from "./modules/setupScrolling";

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
  setupScrolling(".prototype", ".prototype__scroll");
  setupScrolling(".design", ".design__scroll");
});


function slide() {
  const track = document.querySelector(".track");
  const thumb = document.querySelector(".track__thumb");
  const scroll = document.querySelector(".prototype__scroll");
  const scrollContainer = document.querySelector(".prototype__wrapper");

  let mouseDown = false;

  const startDrag = () => {
    document.body.style.overflow = "hidden";
    return mouseDown = true;
  };

  const stopDrag = () => {
    document.body.style.overflow = "auto";
    return mouseDown = false
  };

  thumb.addEventListener("touchstart", startDrag);

  window.addEventListener("touchend", stopDrag);

  const moveSlider = (e) => {
    if (!mouseDown) return;

    let containerRect = track.getBoundingClientRect();
    let sliderHeigth = thumb.offsetHeight;
    let maxPosition = containerRect.height - sliderHeigth;


    let clientY = e.clientY || e.touches[0].clientY
    let mousePosition = clientY - containerRect.top;

    let sliderPosition = Math.min(
      maxPosition,
      Math.max(0, mousePosition - sliderHeigth / 2)
    );

    thumb.style.top = sliderPosition + "px";

    let maxOffset = scroll.offsetHeight - scrollContainer.offsetHeight;
    scrollContainer.scrollTop = (sliderPosition / maxPosition) * maxOffset;
  };

  track.addEventListener("touchmove", moveSlider);
}

slide() 