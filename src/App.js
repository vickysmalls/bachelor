import Navbar from './Header/Header';
import KlasseList from './VelgKlasse/KlasseList';
import './App.css';
import {useState} from 'react';
import Modal from './Modal/Modal';




function App () {


    return (
    <div className="App">
      <Navbar/>
      

      <div className="content">
        <div className='body'>

          <KlasseList/>
          
        
        </div>
      </div>
      
      </div>
     
  );
  }
  


export default App;
