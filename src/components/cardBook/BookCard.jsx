import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function BookCard({book}) {
    const id = book._id;
  return (
    <div className="book--card">
        <div className="book--card__details">
            <h3 className="book__title">Title:- {book.title}</h3>
            <p className="book__author">Author:- {book.author}</p>
            <p className="book__publishYear">Year:- {book.publishYear}</p>
        </div>
        <div className="book--card__edit">
            <Link to={`/book-edit/${id}`} className="btn__edit">
                <FaEdit />
            </Link>
            <Link to={`/book-delete/${id}`} className="btn__delete">
                <MdDelete />
            </Link>
        </div>
    </div>
  )
}

export default BookCard
