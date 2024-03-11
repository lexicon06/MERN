import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CreateBooks from "./pages/CreateBooks.jsx";
import DeleteBooks from "./pages/DeleteBooks.jsx";
import EditBooks from "./pages/EditBooks.jsx";
import Home from "./pages/Home.jsx";
import ShowBook from "./pages/ShowBook.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBooks/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
      <Route path="/books/edit/:id" element={<EditBooks/>} />
      <Route path="/books/delete/:id" element={<DeleteBooks/>} />
      </Routes>
  )
}
