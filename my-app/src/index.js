import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    id: 1,
    author: "Lisa Marie Presley",
    title: "From Here to the Great Unknown",
    src: "https://m.media-amazon.com/images/I/81wThrp1YyL._SY466_.jpg",
  },

  {
    id: 2,
    author: "Melania Trump",
    title: "Melania",
    src: "https://m.media-amazon.com/images/I/419zn8-6gaL._SY466_.jpg",
  },

  {
    id: 3,
    author: "Bob Woodward",
    title: "War ",
    src: "https://m.media-amazon.com/images/I/61ZRi-MxTLL._SY466_.jpg",
  },
];

const BookList = () => {
  const someValue = "shakeAndBake";
  const displaySomeValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} displayValue={displaySomeValue}></Book>
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { src, title, author, displayValue } = props;

  return (
    <article className="book">
      <img src={src} />
      <h2>{title}</h2>
      <button></button>
      <button onClick={displayValue}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
