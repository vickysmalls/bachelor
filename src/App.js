import FagCard from './fag-card/oblig-fag-card';
import Navbar from './Header/Header';
import KlasseList from './VelgKlasse/KlasseList';
import './App.css';
import { Component } from 'react';
//import VelgKlassetrinn from './VelgKlasse/VelgKlassetrinn';

class App extends Component {

  state ={
    obligFagBank: [],

  }

  //check is correct answer and add points (score) and amount of responses (clicks)
  computeAnswer = (answer, correctAnswer) =>{
    if(answer === correctAnswer){
        this.setState({
          obligFagBank: this.state.obligFagBank
        });
    }
}

  render(){

    return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <div className='klasseliste'>
        <KlasseList/>
      </div>
      <div className="fagcard">
        <FagCard/>
        <FagCard/>
        <FagCard/>
      </div>
      
      </div>
      
    </div>
  );
  }
  
}

export default App;
