import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function DeleteBook() {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        const deleteBook = async () => {
            try {
              const res = await axios.delete(`https://book-store-ljzp.onrender.com/books/${id}`)
              navigate("/");
            } catch (error) {
                setError(error)
            }
        }
        deleteBook();
    }
    const handleCancelClick = () => {
        navigate("/")
    }

    if(error) {
        return <h3>{error.message}</h3>
    }
  return (
    <div className="delete__box">
        <h3 className="confermation__text">Are you sure want to delete ?</h3>
        <div className="btn__section">
            <button className="btn__delete" onClick={handleDeleteClick}>delete</button>
            <button className="btn__cancel" onClick={handleCancelClick}>cancel</button>
        </div>
      
    </div>
  )
}

export default DeleteBook
