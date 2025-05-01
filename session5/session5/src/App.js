import React from 'react';
import Button from './components/Button';
import Write from './components/Write';
import Article from './components/Article';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Button/>}/> 
        <Route path='/write' element={<Write/>}/> 
        <Route path='/article' element={<Article/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
