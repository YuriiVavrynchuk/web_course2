const itemsContainer = document.getElementById("container__items");

const getItemId = (id) => `item-${id}`

const itemTemplate = ({id, brand, model, power, price}) =>
`<li id="${getItemId(id)}" class="item-card">
    <img 
        src="https://cdn.comfy.ua/media/catalog/product/e/p/epson_l805_c_wi-fi_2_1.jpg"
        class="item-container__image" alt="card">
    <div>
        <h4>${brand}</h4>
        <h5>${model}</h5>
        <p>Sheets per minute: ${power} sheets/minute</p>
        <p>Price: ${price} UAN</p>
    </div>
</li>`;

export const addItemToPage = ({id, brand, model, power, price}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, brand, model, power, price})
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};
