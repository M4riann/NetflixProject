import React, { Fragment } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { Route,Routes, Router } from 'react-router-dom';
import Seriale from './NavbarRoutes/Seriale';
import Filme from './NavbarRoutes/Filme'
import NoiSiPopulare from './NavbarRoutes/NoiSiPopulare'
import FiltrareLimbaj from './NavbarRoutes/FiltrareLimbaj'
import NoPage from './NavbarRoutes/NoPage';

function App() {
  return (
    
    <Fragment>
            <Routes>
                <Route path='/homePage' element={<HomePage/>}/> 
                <Route path='/seriale' element={<Seriale/>}/>
                <Route path='/filme' element={<Filme/>}/>
                <Route path='/noi-trending' element={<NoiSiPopulare/>}/>
                <Route path='/filtrare' element={<FiltrareLimbaj/>}/>
                {/* <Route path='*' element={<NoPage/>}/> */}
            </Routes>
    </Fragment>
      
      
  )
}

export default App;
