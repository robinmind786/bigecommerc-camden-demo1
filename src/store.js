import { setStorageItem, getStorageItem} from './utils.js';
let store = getStorageItem('store')
const setupStore = (products) => {
	store = products.map(function(product){
		const {
			id,
			fields: {
				brand, name, sku, featured, newproduct, wasprice, presentprice, stock, sale, desc, image: img,
			}
		} = product;
		const image = img[0].thumbnails.large.url;
		return {id, brand, name, sku, featured, newproduct, wasprice, presentprice, stock, sale, desc, image }
	});
	setStorageItem('store', store);
};




export {
	store,
	setupStore
}