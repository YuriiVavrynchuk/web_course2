export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';

const brandInput = document.getElementById("brand_input");
const modelInput = document.getElementById("model_input");
const powerInput = document.getElementById("power_input");
const priceInput = document.getElementById("price_input");

const itemsContainer = document.getElementById("container__items");

const getItemId = (id) => `item-${id}`;

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
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">Edit</button>
        <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="default_button">Delete</button>
    </div>
</li>`;

export const clearInputs = () => {
    brandInput.value = "";
    modelInput.value = "";
    powerInput.value = "";
    priceInput.value = "";
};

export const addItemToPage = ({id, brand, model, power, price}, onEditItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, brand, model, power, price})
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

    editButton.addEventListener("click", onEditItem);
    deleteButton.addEventListener("click", onDeleteItem);
};

export const renderItemsList = (items, onEditItem, onDeleteItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onDeleteItem);
    }
};

export const getInputValues = () => {
    return {
        brand: brandInput.value,
        model: modelInput.value,
        power: powerInput.value,
        price: priceInput.value,
    };
};