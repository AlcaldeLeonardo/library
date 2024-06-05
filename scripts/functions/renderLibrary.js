import { renderCardBook } from "./cardBook.js";

export function renderLibrary(array) {
    const libraryDom = document.querySelector(`#libraryDOM`);
    libraryDom.innerHTML = ``;
    let i = 0;
    
    array.forEach(element => {
        libraryDom.appendChild(renderCardBook(element, i))
        i++;
    });
}