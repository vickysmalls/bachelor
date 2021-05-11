import React from 'react'
import './ValideringAlert.css'

export default class ValideringComponent extends React.Component {

      render() { 
        return (
          <div id="valideringAlert"> 
          <p id="valideringTekst">
           Du har ikke gjort alle valg enda.
          </p>
          </div>
          );
      }  
}
