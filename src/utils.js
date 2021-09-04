const allProductsUrl = "https://raw.githubusercontent.com/robinmind786/camden-api-demo1/main/product.json";

const getElement = (selection) => {
	const element = document.querySelector(selection);
	if(element) return element;
	throw new Error(
		`Please check "${selection}" selector, no such element exist`
	);
};

const getStorageItem = function(item) {
	let storageItem = localStorage.getItem(item);
	if(storageItem) {
		storageItem = JSON.parse(localStorage.getItem(item));
	} else {
		storageItem = [];
	}
	return storageItem;
};

const setStorageItem = function(name, item) {
	localStorage.setItem(name, JSON.stringify(item));
};



export {
	getElement,
	allProductsUrl,
	getStorageItem,
	setStorageItem,

}