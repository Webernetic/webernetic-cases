export const createItem = (str) => {
    return `<li>${str}</li>`;
}

export const printList = (el, items) => {
    return el.insertAdjacentHTML(
        "afterbegin",
        items.map((text) => createItem(text)).join("")
    );
}