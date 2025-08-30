

// => acicionar item ✅
async function addItem(userCart, item) {
    userCart.push(item);
};

// => deletar item ✅
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1)
    }
};

// => remover item ✅
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    };

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    };
    const deleteIndex = index - 1;

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
};

async function displayCart(userCart){
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) =>  {
        console.log(`${index + 1}, ${item.name} = R$ ${item.price} | ${item.quantity}x | Subtotal = R$ ${item.subtotal() }`)
    });
};

// => calcular total ✅
async function calculeTotal(userCart) {
    console.log("\nShopee Cart! TOTAL IS:");
    
    const totalCart = userCart.reduce((total, item) => total + item.subtotal(), 0);
    const result = totalCart.toFixed(2);
    
    console.log(`🛒 Total: R$ ${result}\n`);
    
}


export {
    addItem,
    calculeTotal,
    deleteItem,
    removeItem,
    displayCart,
}

