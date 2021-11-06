const PRINTERS = [
    { id:1, brand: "Samsung", model: "HG723H", power:120, price:5000},
    { id:2, brand: "Dell", model: "G732F", power:89, price:100},
    { id:3, brand: "HP", model: "9394f", power:78, price:900},
    { id:4, brand: "Apple", model: "BB789U", power:100, price:700},
    { id:5, brand: "LG", model: "PO0098U", power:788, price:700}
]

export const getAllPrinters = () => {
    return PRINTERS;
};

export const postPrinters = (body) => {
    PRINTERS.push(body);
}

export const updatePrinters = (id, body) => {
    let index = PRINTERS.findIndex(idx => idx.id == id);
    PRINTERS[index].brand = body.brand;
    PRINTERS[index].model = body.model;
    PRINTERS[index].power = body.power;
    PRINTERS[index].price = body.price;
}