document.addEventListener("DOMContentLoaded", function() {
    fetchBooks();
});

function handleClick(event) {
    let showPanel = document.getElementById("show-panel");
    let bookInfo = document.createElement("div");
    bookInfo.innerHTML = `<p>${event.target.title}</p>
    <img src=${event.target.img}>
    <span>${event.target.description}
    ${event.target.users}</span>`
    showPanel.appendChild(bookInfo);
    console.log(event)
}

function renderBooks(books) {
    let list = document.getElementById("list");
    books.forEach(book => {
        let singleBook = document.createElement("li");
        singleBook.innerHTML = `<h6>${book.title}</h6>`;
        singleBook.id = `${book.id}`;
        singleBook.description= `${book.description}`;
        singleBook.author=`${book.author}`;
        singleBook.img=`${book.img_url}`;
        singleBook.users=`${book.users}`;
        singleBook.title=`${book.title}`;
        singleBook.addEventListener("click", handleClick);
        list.appendChild(singleBook);
    });
};

function fetchBooks() {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => renderBooks(data))
};
