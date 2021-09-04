// ui import
import  './src/ui/main.js';

// global import

// specific import
import { getElement } from './src/utils.js';
import fetchProducts from './src/fetchProducts.js';
import { store, setupStore } from './src/store.js';
import display from './src/displayProducts.js';



const init = async function() {
	const products = await fetchProducts();
	if(products) {
		setupStore(products);
    	const featured = store.filter((product) => product.featured === true);
		display(featured, getElement('.featured'));
    	const newpro = store.filter((product) => product.newproduct === true);
		display(newpro, getElement('.newpro'));
	}
}


window.addEventListener('DOMContentLoaded', init);