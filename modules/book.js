export default class Books {
  constructor(array) {
    this.bookArray = array;
  }

  bookObj = (bookTitle, authorName) => {
    const eachBook = {
      title: bookTitle,
      author: authorName,
    };
    this.bookArray.push(eachBook);
  };

  booksFilter = (eachBook) => {
    this.bookArray = this.bookArray.filter((book) => book !== eachBook);
  };
}
