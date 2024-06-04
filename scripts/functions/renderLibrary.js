import { renderCardBook } from "./cardBook.js";

export function renderLibrary(array) {
    const libraryDom = document.querySelector(`#libraryDOM`);
    libraryDom.innerHTML = ``;
    
    array.forEach(element => {
        libraryDom.appendChild(renderCardBook(element))
    });
}