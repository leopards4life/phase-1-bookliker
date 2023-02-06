document.addEventListener("DOMContentLoaded", function() {
    fetchBooks();
});

function handleClick(event) {
    let showPanel = document.getElementById("show-panel");
    let bookInfo = document.createElement("div");
    bookInfo.id = "displayed-book";
    bookInfo.innerHTML = `${event.target.title}
    <img src=${event.target.img}>
    ${event.target.description}`;
    let users = event.target.users;
    users.forEach(user => {
        console.log(user)
        let currentBook = document.getElementById("displayed-book");
        let userInfo = document.createElement("div");
        userInfo.innerHTML = user.username;
        // currentBook.appendChild(userInfo);
    });
    showPanel.appendChild(bookInfo);
}

function renderBooks(books) {
    let list = document.getElementById("list");
    books.forEach(book => {
        let singleBook = document.createElement("li");
        singleBook.innerHTML = book.title;
        singleBook.id = book.id;
        singleBook.description = book.description;
        singleBook.author = book.author;
        singleBook.img = book.img_url;
        singleBook.users = book.users;
        singleBook.title = book.title;
        singleBook.addEventListener("click", handleClick);
        list.appendChild(singleBook);
    });
};

function fetchBooks() {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => renderBooks(data))
};
