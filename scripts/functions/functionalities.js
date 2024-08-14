import { Book } from '../prototypes/Book.js'
import { renderLibrary } from './renderLibrary.js'

const bookTitle = document.querySelector('#bookTitle')
const bookAuthor = document.querySelector('#bookAuthor')
const bookpages = document.querySelector('#bookpages')
const readStatus = document.querySelector('#readStatus')

function validateData () {
  if (bookTitle.value !== '' && bookAuthor.value !== '' && !Number.isNaN(Number(bookpages.value)) && bookpages.value !== '' && !bookpages.value.includes(' ') && Number(bookpages.value) !== 0) {
    return true
  } else {
    window.alert('Data is missing, or perhaps you should make sure to put the number of pages in number format')
  }
}
// This function will be exported to each book card
export function deleteBook (array, index) {
  array.splice(index, 1)
  renderLibrary(array)
}

export function changeReadStatus (array, index) {
  const book = array[index]

  book.isRead = !book.isRead
  renderLibrary(array)
}

function resetInput () {
  bookTitle.value = ''
  bookAuthor.value = ''
  bookpages.value = ''
  readStatus.checked = false
}

function addBookToLibrary (array) {
  const book = new Book(bookTitle.value, bookAuthor.value, Number(bookpages.value), readStatus.checked)

  array.push(book)
  resetInput()
}

function showElementFlex (element) {
  element.style.display = 'flex'
}

function closeElement (element) {
  element.style.display = 'none'
  resetInput()
}

export function addFunctionalities (array) {
  const modalContainer = document.querySelector('#modalContainer')

  const addBookBtn = document.querySelector('.plusCard__btn')
  const cancelBtn = document.querySelector('#cancelBtn')
  const okBtn = document.querySelector('#okBtn')

  addBookBtn.addEventListener('click', () => showElementFlex(modalContainer))
  cancelBtn.addEventListener('click', () => closeElement(modalContainer))
  okBtn.addEventListener('click', () => {
    if (validateData()) {
      addBookToLibrary(array)
      closeElement(modalContainer)
      renderLibrary(array)
    }
  })
}
