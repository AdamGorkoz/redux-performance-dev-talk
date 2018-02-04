import faker from 'faker';

let items = {};
for(let i=0; i < 10000; i++){
    items[i] = {
        id: i,
        name: faker.commerce.productName(),
        selected: false
    };
}

export default  {
    items : {
        byId: items,
        allIds: Object.keys(items)
    }
}