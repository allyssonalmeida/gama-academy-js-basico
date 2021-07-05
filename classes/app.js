class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  read() {
    return `Estou lendo ${this.title}!`;
  }
}

class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }
}

let book = new ITBook('Boas Práticas', 'Simaria', '200', 'Desenvolvimento');

console.log(book.read());

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let person = new Person('Allysson');
console.log(person.name);
