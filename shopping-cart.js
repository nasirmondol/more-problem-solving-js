const shoppingCart = [
    { name: 'Shirt', price: 899, quantity: 2 },
    { name: 'Pant', price: 1200, quantity: 2 },
    { name: 'Shoe', price: 1000, quantity: 4 },
    { name: 'belt', price: 199, quantity: 1 },
]


function productTotal(products) {
    let price = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        // console.log(product);
        const productTotal = product.price * product.quantity;

        price += productTotal;
    }
    return price;
}
const shopping = productTotal(shoppingCart);
console.log(shopping);