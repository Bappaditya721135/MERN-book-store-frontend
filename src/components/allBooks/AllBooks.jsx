import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BookCard from '../cardBook/BookCard';


function AllBooks({books}) {

  if(!books) {
    return <h3 className="text__noBook U-text-center">You don't have any books...</h3>
  }
  return (
    <div className="books__container">
      {books.map((book, i) => <BookCard key={i} book={book} />)}  
    </div>
  )
}

export default AllBooks
