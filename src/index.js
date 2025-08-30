import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";



const myCart = [];
const myWishList = [];

console.log("🥳 Welcome to the your Shopee Cart! 🛒");

const item1 = await createItem("Hot Wheels Ferrari", 20.99, 6);
const item2 = await createItem("Hot Wheels Lamborghini", 39.99, 3);
const item3 = await createItem("Hot Wheels - Datsun Fairlady 2000", 38.99, 2);
const item4 = await createItem("Hot Wheels - Porsche 930", 146.73, 1);
const item5 = await createItem("Hot Wheels - Chevy Chevelle SS", 27.99, 5);
const item6 = await createItem("Hot Wheels Acura NSX", 50.60, 4);



await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);
await cartService.addItem(myCart, item6);

await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, 1);

await cartService.displayCart(myCart);
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);


await cartService.calculeTotal(myCart);






