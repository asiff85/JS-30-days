let book = {
    title: 'deyal',
    author: 'humayun ahmed',
    year: '1995'
}
console.log(book);
console.log(book.author, book.title);

const books = (author, title, year) => {
    let book = {
        title: title,
        author: author,
        year: year

    }
    return `${book.title} by ${book.author} year=${book.year}`;
}
console.log(books('Chetan Bhagat', 'One night in calling center', '2000'));
console.log(books('Paula Hawkins', 'The girl on the train', '1995'));
console.log(books('George Orwell', '1984', '1948'));

let arrayObj = [{ library: 'pathoker world', place: 'khulna' },
{ bookName: 'deyal', year: '1990' },
{ bookName: 'abon himu', year: '2010' },
{ bookName: 'megher upor bari', year: '2011' }];
console.log(arrayObj);

console.log(arrayObj[0].library);
for (let i = 1; i <= 3; i++) {
    console.log(arrayObj[i].bookName);
}
// add a method to a book object that uses the this keyword to return a string with the book title and year in JS
book = {
    title: 'hirar ghor',
    year: '1995',
    getInfo: function () {
        return `${this.title} year=${this.year}`
    }
}
console.log(book.getInfo()); // call by function with brakets

book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
};

for (let property in book) {
    console.log(property + '=' + book[property]);
    console.log(book.property);
}

