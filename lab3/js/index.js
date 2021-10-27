import { 
    getInputValues,
    renderItemsList,
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    clearInputs
} from "./dom_util.js";

import { 
    getAllPrinters, 
    postPrinter, 
    updatePrinter,
    deletePrinter
} from "./api.js";

const formField = document.getElementById("item_form");
const submitButton = document.getElementById("submit_button");

const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let printers = [];

const onEditItem = async (e) => {
    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");

    await updatePrinter(itemId, getInputValues());

    clearInputs();

    refetchAllPrinters();
};

const onRemoveItem = async (element) => {
    const itemId = element.target.id.replace(DELETE_BUTTON_PREFIX, "");

    await deletePrinter(itemId);

    refetchAllPrinters(); 
}

export const refetchAllPrinters = async () => {
    const allPrinters = await getAllPrinters();

    printers = allPrinters.sort((a, b) => b.model.localeCompare(a.model));

    renderItemsList(printers, onEditItem, onRemoveItem);
};

submitButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const { brand, model, power, price } = getInputValues();

    clearInputs();

    postPrinter({
        brand,
        model, 
        power,
        price,
    }).then(refetchAllPrinters);

});

searchButton.addEventListener("click", () => {
    const foundPrinters = printers.filter(
        printer => printer.brand.search(searchInput.value) !== -1
    );

    renderItemsList(foundPrinters, onEditItem, onRemoveItem);
});

clearSearchButton.addEventListener('click', () => {
    renderItemsList(printers, onEditItem, onRemoveItem);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function() {
    if (this.checked) {
        const sortedPrinters = printers.sort(
            (a, b) => parseInt(a.price) - parseInt(b.price));
        
        renderItemsList(sortedPrinters, onEditItem, onRemoveItem);
    } else {
        refetchAllPrinters();
    }
});

countButton.addEventListener("click", () => {
    let sum = printers.map(o => o.price).reduce((a, c) => { return a + c });
    document.getElementById("total-price").innerText = sum;
    console.log(sum);
});

refetchAllPrinters();
