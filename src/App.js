import FagCard from './fag-card/oblig-fag-card';
import Navbar from './Header/Header';
import KlasseList from './VelgKlasse/KlasseList';
import './App.css';
import { Component } from 'react';
//import VelgKlassetrinn from './VelgKlasse/VelgKlassetrinn';

class App extends Component {

  state ={
    valgtTrinn: []

  }
  

  //
  computeAnswer = (answer) =>{
    if(answer){
        this.setState({
          valgtTrinn: this.state.valgteFag
        });
    }
    console.log(answer);
    
}

  render(){

    return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <div className='klasseliste'>
        <KlasseList
        selected = {answer => this.computeAnswer(answer)}
        />
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
