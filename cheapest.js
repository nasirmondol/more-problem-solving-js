

// function cheapestPhone(phones) {
//     let cheapest = phones[0]
//     for (let i = 0; i < phones.length; i++) {
//         const name = phones[i]
//         if (name.price < cheapest.price) {
//             cheapest = name;
//         }
//     }
//     return cheapest;

// }
// const cheapest = cheapestPhone(phones);
// console.log(cheapest);

const phones = [
    { name: 'Samsung', price: 23000, color: 'Black', camera: 10, storage: '128gb' },
    { name: 'Nokia', price: 14000, color: 'Black', camera: 12, storage: '128gb' },
    { name: 'Oppo', price: 18000, color: 'Black', camera: 15, storage: '128gb' },
    { name: 'Symphony', price: 16000, color: 'Black', camera: 10, storage: '128gb' },
    { name: 'iphone', price: 90000, color: 'Black', camera: 24, storage: '128gb' },
    { name: 'Maximus', price: 11000, color: 'Black', camera: 8, storage: '128gb' },
    { name: 'vivo', price: 15500, color: 'Black', camera: 10, storage: '128gb' },
]

function heightCameraPixel(phones) {
    let heighest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const name = phones[i];
        if (name.camera > heighest.camera) {
            heighest = name;
        }
    }
    return heighest;
}

const camera = heightCameraPixel(phones);
// console.log(camera);