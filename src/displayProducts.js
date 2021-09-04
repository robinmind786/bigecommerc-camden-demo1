const display = function(products, element) {
	  element.innerHTML = products
	    .map((product) => {
	      const { id, brand,name,sku, wasprice, presentprice, sale, image } = product;
	      return `
         <article>
           <div class="card">
             <div class="card-header">
              <a href="#">
                 <div class="card-img">
                   <img src="${image}">
                   <div class="card-img-overlay">
                     <a href="#" class="btn">Quick View</a>
                   </div>
                   <div class="sale">
                     <span>${sale}</span>
                   </div>
                 </div>
              </a>
             </div>
             <div class="card-body">
               <div class="card-qr">
                 <ul>
                   <li><span>${brand}</span></li>
                   <li><span> SKU: ${sku}</span></li>
                 </ul>
               </div>
               <div class="card-title">
                 <a href="#">${name}</a>
               </div>
             </div>
             <div class="card-footer">
               <div class="card-price">
                <h4 class="was-price"><del>$${wasprice/100}</del></h4>
                 <h3 class="present-price">$${presentprice/100}</h3>
               </div>
               <div class="add-cart">
                 <a href="#" class="btn">Add To Cart</a>
               </div>
               <div class="add-wishlist">
                 <a href="#" class="btn">Add To Your List <i class="fa fa-star-o"></i></a>
               </div>
             </div>
           </div>
         </article>
	      `;
	    })
	    .join('');
};




export default display;
