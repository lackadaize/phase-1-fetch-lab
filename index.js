function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => console.log(renderBooks(json)));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

console.log(fetchBooks());
//  1) index.js
// fetchBooks()
// sends a fetch request to 'https://anapioficeandfire.com/api/books':

// 2) index.js
// fetchBooks()
//   renders book titles into the DOM by passing a JSON object to renderBooks():