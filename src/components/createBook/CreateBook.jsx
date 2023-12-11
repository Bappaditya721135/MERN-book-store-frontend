import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";


function CreateBook() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publishYear: ""
  })
  const [error, setError] = useState(null)

  const handleFormDataChange = (e) => {
    console.log("changing")
    const {name, value} = e.target;
    setBookData(prevData => {
      return {
        ...prevData,
        [name]: name === "publishYear" ? Number(value) : value,
      }
    })
  }


  // FORM SUBMIT HANDLER 
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const res = await axios.post("https://book-store-ljzp.onrender.com/books", bookData);
        if(res) navigate("/");
      } catch (error) {
        setError(error)
      }
    }
    postData()
  }


  // IF ERROR IS TRUE 
  if(error) {
    return <h3 className="U-text-center U-fontsize-large">{error.message}</h3>
  }
  return (
    <div className="book--container">
      <Link to="/" className="btn__back">
        <FaArrowLeft />
      </Link>

      <form className="book__form" onSubmit={handleSubmit}>
        <h2 className="form__heading">Add Book</h2>

        <div className="form__group">
            <input type="text" name="title" id="book-name" placeholder="book name" onChange={handleFormDataChange}  value={bookData.title} required />
            <label htmlFor="book__name">Book Name</label>
        </div>

        <div className="form__group">
            <input type="text" name="author" id="book-author" placeholder="book author" onChange={handleFormDataChange} value={bookData.author} required />
            <label htmlFor="book-author">Author</label>
        </div>

        <div className="form__group">
            <input type="number" name="publishYear" id="publish-year" placeholder="publish year" onChange={handleFormDataChange} value={bookData.publishYear}  required />
            <label htmlFor="publish-year">Publish Year</label>
        </div>

        <div className="form__group">
          <button className="U-btn-primary">add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBook
