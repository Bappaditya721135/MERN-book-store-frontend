import React, {useState, useEffect} from 'react';
import {FaArrowLeft} from "react-icons/fa";
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

// CONTEXT 
import { Context } from "../../App.jsx";

function EditBook() {
    const {id} = useParams();
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)


    // NAVIGATE 
    const navigate = useNavigate();

    useEffect(() => {
        const getBook = async () => {
            try {
                console.log("requesting")
                const res = await axios.get(`https://book-store-ljzp.onrender.com/books/${id}`)
                setBook(res.data.book)
                setLoading(false)
            } catch (error) {
                setError(error);
                setLoading(false)
                console.error(error)
            }
        }
        getBook();
    }, []);


    const handleFormDataChange = (e) => {
        const {name, value} = e.target;
        setBook(prevData => {
        return {
            ...prevData,
            [name]: name === "publishYear" ? Number(value) : value,
        }
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const updateData = async () => {
            try {
                const res = await axios.put(`https://book-store-ljzp.onrender.com/books/${id}`,book)
                navigate("/");
            } catch (error) {
               setError(error)
            }
        }
        updateData();
    }

if(loading) {
    return <h3 className="U-text-center U-fontsize-large">loading...</h3>
}

if(error) {
    return <h3 className="U-text-center U-fontsize-large">{error.message}</h3>
}
  return (
    <div className="book--container">
      <Link to="/" className="btn__back">
        <FaArrowLeft />
      </Link>
      
      <form className="book__form" onSubmit={handleSubmit}>
        <h2 className="form__heading">Update Book</h2>

        <div className="form__group">
            <input type="text" name="title" id="book-name" onChange={handleFormDataChange} value={book.title}  required />
            <label htmlFor="book__name">Book Name</label>
        </div>

        <div className="form__group">
            <input type="text" name="author" id="book-author" onChange={handleFormDataChange} value={book.author} required />
            <label htmlFor="book-author">Author</label>
        </div>

        <div className="form__group">
            <input type="number" name="publishYear" id="publish-year" onChange={handleFormDataChange} value={book.publishYear}  required />
            <label htmlFor="publish-year">Publish Year</label>
        </div>

        <div className="form__group">
          <button className="U-btn-primary">add</button>
        </div>
      </form>
    </div>
  )
}

export default EditBook
