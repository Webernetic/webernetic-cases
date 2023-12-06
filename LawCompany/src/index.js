import './index.pug'
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(entries => {

		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const elements = entry.target.children
				for (let i = 0; i < elements.length; i++)
					elements[i].classList.add('active');
			}
		});
	});
	observer.observe(document.querySelector('.colors-section__color-items '));
})