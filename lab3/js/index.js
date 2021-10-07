import { renderItemsList } from "./dom_util.js";
import { getAllPrinters } from "./printers.js";

const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let printers = [];

export const refetchAllPrinters = () => {
    const allPrinters = getAllPrinters();

    printers = allPrinters.sort((a, b) => b.model.localeCompare(a.model));

    renderItemsList(printers);
};

searchButton.addEventListener("click", () => {
    const foundPrinters = printers.filter((printer) => printer.model.search(searchInput.value) !== -1);

    renderItemsList(foundPrinters);
});

clearSearchButton.addEventListener('click', () => {
    renderItemsList(printers);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function() {
    if (this.checked) {
        const sortedPrinters = printers.sort(
            (a, b) => parseInt(a.price) - parseInt(b.price));
        
        renderItemsList(sortedPrinters);
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
