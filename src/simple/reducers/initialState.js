import faker from 'faker';

let items = [];
for(let i=0; i < 10000; i++){
    items.push({
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        selected: false
    });
}

export default  {
    items: items
}