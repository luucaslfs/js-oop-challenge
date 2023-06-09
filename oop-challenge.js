class Book {
    constructor(id, title, description, author) {
        this.id = id;
        this._title = title;
        this._description = description;
        this._author = author;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.lastId = 0;
    }
    addBook(book) {
        book.id = this.lastId + 1;
        this.books.push(book);
        console.log(book.title, 'book added to Library');
        this.lastId++;
        return book;
    }
    getBooks() {
        console.log("Listing books...");
        this.books.forEach((book, index) => {
            console.log(`Book ${index + 1}:`);
            console.log(`Title: ${book.title}`);
            console.log(`Description: ${book.description}`);
            console.log(`Author: ${book.author}`);
            console.log("------------------------");
        });
        return this.books;
    }
    removeBookById(bookId) {
        let index = -1;
        index = this.books.findIndex(book => book.id === bookId);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log("Book ${bookId} removed")
        } else {
            console.log("Book ${bookId} not found");
        }
    }
    getBookById(bookId) {
        return this.books.find(book => book.id === bookId);
    }
    updateByBookId(bookId, newTitle, newDescription, newAuthor) {
        const book = this.books.find(book => book.id === bookId);

        if (book) {
            book.title = newTitle;
            book.description = newDescription;
            book.author = newAuthor;
            console.log(`Book with ID ${bookId} updated.`);
        } else {
            console.log(`Book with ID ${bookId} not found in the library.`);
        }
    }
}

// 'new':
//  - cria um novo objeto vazio
//  - seta o valor de 'this' para o novo objeto vazio
//  - chama o metodo construtor

const myLibrary = new Library();

const book1 = new Book(0, "The Great Gatsby", "A story about the Jazz Age", "F. Scott Fitzgerald");
const book2 = new Book(0, "To Kill a Mockingbird", "A novel about racial inequality", "Harper Lee");

myLibrary.addBook(book1);
myLibrary.addBook(book2);

const book = myLibrary.getBookById(2); // Get book with ID 2
console.log(book);

myLibrary.updateByBookId(2, "Harry Potter", "A story about the magical wizarding world", "J.K. Rowling")

myLibrary.getBooks();