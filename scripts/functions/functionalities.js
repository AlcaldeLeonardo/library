import { Book } from "../prototypes/Book.js";
import { renderLibrary } from "./renderLibrary.js";

const bookTitle = document.querySelector(`#bookTitle`);
const bookAuthor = document.querySelector(`#bookAuthor`);
const bookPages = document.querySelector(`#bookPages`);
const readStatus = document.querySelector(`#readStatus`);

function resetInput(){
    bookTitle.value = ``
    bookAuthor.value = ``
    bookPages.value = ``;
    readStatus.checked = false;
}

function addBookToLibrary(array) {

    const book = new Book(bookTitle.value,bookAuthor.value,Number(bookPages.value),readStatus.checked)

    array.push(book);
    resetInput();
}

function showElementFlex(element) {
    element.style.display = "flex";
}

function closeElement(element) {
    element.style.display = "none";
    resetInput();
}

export function addFunctionalities(array) {
    const modalContainer = document.querySelector(`#modalContainer`);

    const addBookBtn = document.querySelector(`.cardPlus__btn`);
    const cancelBtn = document.querySelector(`#cancelBtn`);
    const okBtn = document.querySelector(`#okBtn`);

    addBookBtn.addEventListener(`click`, () => showElementFlex(modalContainer));
    cancelBtn.addEventListener(`click`, () => closeElement(modalContainer));
    okBtn.addEventListener(`click`, () => {
        addBookToLibrary(array);
        closeElement(modalContainer);
        renderLibrary(array);
    });
}
