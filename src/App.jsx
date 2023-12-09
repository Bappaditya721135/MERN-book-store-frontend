import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


// COMPONENTS 
import Home from './components/home/Home';
import CreateBook from './components/createBook/CreateBook';
import EditBook from './components/editBook/EditBook';
import DeleteBook from './components/deleteBook/DeleteBook';

function App() {
 
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-book" element={<CreateBook />} />
          <Route path="/book-edit/:id" element={<EditBook />} />
          <Route path="/book-delete/:id" element={<DeleteBook />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
