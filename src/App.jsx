import React, { useEffect, useState, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from 'axios';


// COMPONENTS 
import Home from './components/home/Home';
import CreateBook from './components/createBook/CreateBook';
import EditBook from './components/editBook/EditBook';
import DeleteBook from './components/deleteBook/DeleteBook';


// UTILS 
import { getBooksFromLocalStorage } from './utils/initialFetch';

// CONTEXT  
export const Context = createContext();

function App() {
  const [books, setBooks] = useState(getBooksFromLocalStorage());
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!books) {
      const fetchBooks = async () => {
        try {
          const {data} = await axios.get("https://book-store-ljzp.onrender.com/books");
          // STORE THE DATA IN LOCALSTORAGE 
          localStorage.setItem("books", JSON.stringify(data.books));
          setBooks(data.books);
        } catch (error) {
          setError(error)
        }
      }
      fetchBooks();
    }
  }, [])
 
  return (
      <div className="app">
        <Context.Provider value={{books, error}}>
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-book" element={<CreateBook />} />
                <Route path="/book-edit/:id" element={<EditBook />} />
                <Route path="/book-delete/:id" element={<DeleteBook />} />
            </Routes>
          </Router>
        </Context.Provider>
      </div>
  )
}

export default App
