import './index.pug'
import './main.scss'

document.addEventListener('DOMContentLoaded', () => {

	const animParams = {
		homeIcons: document.querySelectorAll(".project-tech__icon"),
		homeBox: document.querySelectorAll(".project-tech__box"),
		sectionColors: document.querySelectorAll('.obs'),
		sectionStage: document.querySelectorAll('.stages-section__stage'),
		options: {
			rootMargin: "0px",
			threshold: 1,
		},
		callback: (entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("isActive");
					observer.unobserve(entry.target)
				}
			})
		},
		delayVisible: (elements, delay = 200) => {
			elements.forEach((icon, i) => setTimeout(() => observerAnim.observe(icon), delay * (i + 1)))
		},
	}

	const observerAnim = new IntersectionObserver(animParams.callback, animParams.options);

	animParams.delayVisible(animParams.homeIcons);
	animParams.delayVisible(animParams.homeBox, 500);
	animParams.delayVisible(animParams.sectionStage, 300);
	animParams.delayVisible(animParams.sectionColors, 300);
})