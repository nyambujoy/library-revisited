const myLibrary = [];

function Book(title, author, status) {
    // the constructor...
    this.title = title
    this.author = author
    this.status = status

}

function addBookToLibrary() {
    // do stuff here

    const title = document.getElementById("title").value
    const author = document.getElementById("Author").value
    const status = document.getElementById("status").value

    const bookToAdd = new Book(title, author, status)
    myLibrary.push(bookToAdd);

    displayLibrary()
}

function displayLibrary() {

    const dispalyDiv = document.querySelector(".displayBook")
    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement("div")
        bookElement.classList.add("book")
        bookElement.innerHTML = `
        <h2>BOOK LIST</h2>
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>status: ${book.status}</p>
        `

        dispalyDiv.appendChild(bookElement)
    })

}

const addButton = document.querySelector(".addButton")
addButton.addEventListener("click", addBookToLibrary)