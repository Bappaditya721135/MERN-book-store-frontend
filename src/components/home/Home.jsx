import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import AllBooks from '../allBooks/AllBooks';

// AXIOS FETCH API 
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // GET ALL THE BOOKS FROM THE DATABASE 
  useEffect(() => {
    const getBooks = async () => {
      try {
        const {data} = await axios.get("https://book-store-ljzp.onrender.com/books");
        const {books} = data;
        // SETTING THE BOOKS ARRAY 
        setBooks(books);
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
        setLoading(false)
      }
    }
    getBooks()
  }, []);


  // WHEN ERROR OCCUORS 
  if(error) {
    return <h3 className="U-text-center U-fontsize-large">{error.message}...</h3>
  }

  return (
    <div className="home">
      <h2 className="home__heading-text">All your books</h2>

      {/* IF LOADING IS TRUE  */}
      {loading ? <h3 className="U-text-center U-fontsize-large">getting your book. please wait...</h3> : <AllBooks books={books} />}
      <Link className="new__book--link" to="/new-book">
        <FaPlus />
      </Link>
      
    </div>
  )
}

export default Home;
