import React, { Fragment } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { Route,Routes, Router } from 'react-router-dom';
import Seriale from './NavbarRoutes/Seriale';
import Filme from './NavbarRoutes/Filme'
import NoPage from './NavbarRoutes/NoPage';
import SearchResults from './Components/SearchResults';
import GenreSelectedMovies from './Components/GenreSelectedMovies';
import AccountChoose from './Components/AccountChoose';


function App() {
  return (
    
    <Fragment>
      <AccountChoose/>
            <Routes>
                <Route path='/' element={<HomePage/>}/> 
                <Route path='/seriale' element={<Seriale/>}/>
                <Route path='/filme' element={<Filme/>}/>
                <Route path="/search/:query" element={<SearchResults/>} />
                <Route path="/movies/:genreId" element={<GenreSelectedMovies/>}/>
                <Route path='*' element={<NoPage/>}/>
                <Route path='/search/:query/*' element={<NoPage/>}/>
            </Routes>
    </Fragment>
      
      
  )
}

export default App;
