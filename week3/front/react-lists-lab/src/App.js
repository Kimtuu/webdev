import Book from "./components/Book.js";
import booksData from "./components/booksData.js";
import "./components/Book.css";

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {booksData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
