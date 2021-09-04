import { getElement } from '../utils.js';
import display from '../displayProducts.js';

// Currency Show
const curr = getElement('#curr-link');
const currLink = getElement('.curr-sub');

curr.addEventListener('click', function(e) {
	currLink.classList.toggle('currShow');
});

// Category Show
const dropdown = getElement('#dropdown');
const subMenu = getElement('.sub-menu');

dropdown.addEventListener('click', function(e) {
	subMenu.classList.toggle('showSub')
	const target = e.target;
	if(target.classList.contains('tablinks')) {
		subMenu.style.display = 'block';
	} else {
		subMenu.style.display = null
	}
	console.log(target)

});


