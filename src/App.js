import Navbar from "./Header/Header";
import KlasseList from "./VelgKlasse/KlasseList";
import "./App.css";
import { useState } from "react";
import Modal from "./Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import logo3 from './GLU-logo.png';



//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>

function App() {
  return (
    
      <div className="App">
        <Navbar />

        <div className="content">
          <div className="body">
            <KlasseList />
          </div>
        </div>
        <footer>

          <h6 id="FooterTekst">Denne digitale veilederen for fagvalg i grunnskolelærerutdanningene ved OsloMet er et bacheloroppgaveprosjekt på bestilling fra Institutt for grunnskole- og faglærerutdanning.
<<<<<<< HEAD
              <br />Veilederen er utviklet av studenter ved Institutt for informasjonsteknologi, Fakultet for teknologi, kunst og design. 
=======
              <br /> Veilederen er utviklet av studenter ved Institutt for informasjonsteknologi, Fakultet for teknologi, kunst og design. 
>>>>>>> 3de2f89e078cfcc51c6be792798dfacd2f1eca1a
          </h6>    

          <h6 id="Copyright">    
              © Copyright GFU ved OsloMet 2021 | Utviklet av Christopher Klepp, Andreas Haug Aalby, Wasab Nazir Ali og Viktor Kristoffersen.
          </h6>

        </footer>
      </div>
   
  );
}

export default App;
