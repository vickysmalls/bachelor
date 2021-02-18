import Navbar from './Header/Header';
import KlasseList from './VelgKlasse/KlasseList';
import './App.css';
import {useState} from 'react';
import Popup from './Popup/Popup';


function App () {




  


    return (
    <div className="App">
      <Navbar/>
      

      <div className="content">
      <div className='fagcard'>

       <KlasseList/>
        
       
      </div>
      </div>
      
      
      
      </div>
     
  );
  }
  


export default App;
