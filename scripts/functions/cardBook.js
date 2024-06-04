export function renderCardBook(element) {
    const cardBook = document.createElement(`div`);
    const title = document.createElement(`h2`);
    const author = document.createElement(`p`);
    const page = document.createElement(`p`);
    const isRead = document.createElement(`p`);
    const buttonBox = document.createElement(`div`);

    cardBook.className = `library__cardbook cardbook card`;

    title.className = `cardbook__title title`;
    title.textContent = element.title;
    cardBook.appendChild(title);

    author.className = `cardbook__author author`;
    author.textContent = element.author;
    cardBook.appendChild(author);

    page.className = `cardbook__page page`;
    page.textContent = element.pages;
    cardBook.appendChild(page);

    isRead.className = `cardbook__isRead isRead`;
    if (element.isRead) {
        isRead.textContent = `Read`;
    } else {
        isRead.textContent = `Not yet read`;
    }
    cardBook.appendChild(isRead);

    buttonBox.className = `cardbook__buttonBox buttonBox`;
    buttonBox.innerHTML = 
        `<svg class="buttonBox__edit buttonBox__btn btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book edit</title><path d="M6 20H11V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V10.3C19.78 10.42 19.57 10.56 19.39 10.74L18 12.13V4H13V12L10.5 9.75L8 12V4H6V20M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z" /></svg>

        <svg class="buttonBox__delete buttonBox__btn btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>`;
    cardBook.appendChild(buttonBox);

    return cardBook;
}
