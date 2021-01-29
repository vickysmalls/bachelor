import FagCard from './fag-card/oblig-fag-card';
import Navbar from './Header/Header';
import KlasseList from './VelgKlasse/KlasseList';
import './App.css';
import { Component } from 'react';
import SemesterList from './Semester/Semester';

class App extends Component {

  /*
  state ={
    valgtTrinn: [],
    btns: ['1-7', '5-10']
  }
  */

  render(){

    return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <div className='klasseliste'>
        <KlasseList
        //selected = {answer => this.computeAnswer(answer)}
        
        //btns={this.state.btns}
        
        />
       
      </div>
      <div>
      
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
