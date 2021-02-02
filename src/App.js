import FagCard from './fag-card/oblig-fag-card';
import Navbar from './Header/Header';
import KlasseList from './VelgKlasse/KlasseList';
import './App.css';
import {useState} from 'react';


function App () {


  const [showAdd, setShowAdd] = useState(true);
    return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <div className='fagcard'>

       <KlasseList/>
        
       
      </div>
      <div>
      
      </div>
      
        </div>
      
    </div>
  );
  }
  


export default App;
