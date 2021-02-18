import Navbar from './Header/Header';
import KlasseList from './VelgKlasse/KlasseList';
import './App.css';
import {useState} from 'react';
import Popup from './Popup/Popup';


function App () {

  const [buttonPopup, setButtonPopup] = useState(false);


  


    return (
    <div className="App">
      <Navbar/>
      

      <div className="content">
      <div className='fagcard'>

       <KlasseList/>
        
       
      </div>
      </div>
      
      <main>
        <h1>React Popups</h1>
        <br/><br/>
          <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      </main>

      <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
        <h3>Min popup</h3>
      </Popup>
      
      </div>
     
  );
  }
  


export default App;
