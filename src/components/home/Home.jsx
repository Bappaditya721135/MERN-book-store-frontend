import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import AllBooks from '../allBooks/AllBooks';

// CONTEXT 
import { Context } from '../../App';

function Home() {
  const {books, error} = useContext(Context);


  


  // WHEN ERROR OCCUORS 
  if(error) {
    return <h3 className="U-text-center U-fontsize-large">{error.message}...</h3>
  }

  return (
    <div className="home">
      <h2 className="home__heading-text">All your books</h2>

      {/* IF LOADING IS TRUE  */}
      {!books ? <h3 className="U-text-center U-fontsize-large">getting your book. please wait...</h3> : <AllBooks books={books} />}
      <Link className="new__book--link" to="/new-book">
        <FaPlus />
      </Link>
      
    </div>
  )
}

export default Home;
