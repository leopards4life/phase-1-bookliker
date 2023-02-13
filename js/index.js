document.addEventListener("DOMContentLoaded", function() {
    fetchBooks();
});

function handleClick(event) {
    let showPanel = document.getElementById("show-panel");
    let users = event.target.users;
    let userArray = [];
    for (let i = 0; i < users.length; i++) {
        userArray.push(users[i].username)
    }
    console.log(userArray)
    let bookInfo = document.createElement("div");
    bookInfo.id = "displayed-book";
    let bookUsers = document.createElement("ul");
    bookUsers.className = 'users-list';
    bookInfo.innerHTML = `${event.target.title}
    <img src=${event.target.img}>
    ${event.target.description}`;
    userArray.map(user => {
        let singleUser = document.createElement("li");
        singleUser.innerText = user;
        bookUsers.appendChild(singleUser);
    });
    showPanel.appendChild(bookInfo);
    showPanel.appendChild(bookUsers);
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
