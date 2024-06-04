import { renderCardBook } from "./cardBook.js";
import { renderCardPlus } from "./cardPlus.js";

export function renderLibrary(array) {
    const libraryDom = document.querySelector(`#libraryDOM`);
    libraryDom.innerHTML = ``;

    if (array.length == 0) {
        libraryDom.appendChild(renderCardPlus());
    } else {
        array.forEach(element => {
            libraryDom.appendChild(renderCardBook(element))
        });
        libraryDom.appendChild(renderCardPlus());
    }
}