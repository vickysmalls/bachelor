import { useState  } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import VelgMaster from "../VelgMaster/VelgMaster";
import './VelgKlassetrinn.css';
import Illustrasjon from './Illustrasjon.png';
import VelgEmne from './VelgEmne.png';
import ToBilder from './ToBilder.png';
import Elever from './Elever.jpeg';
import Undervisning from './undervisning.jpeg';
import Praksis from './Praksis.jpeg';


const KlasseList = ({ handleClick}) => {

    //henter tabellen klasser og plasserer det i klassetrinn
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/klasser`);

    //setter klassetrinn til å bli answer
    const [answer, setAnswer] = useState(klassetrinn);

    //brukes til å lagre objektet
    const [obj, setObj] = useState();
    const [visVidere, setVisVidere] = useState(false);
    
    
    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        console.log(e);
        const id = e.id;
        console.log('id fra handleClick = '+id);
        
    }

    function visVidereClick(visVidere){
        console.log('vis videre klikket');
        console.log(visVidere);
        
        setVisVidere(true)
    }
    
   
     return ( 
        
        
        
<div className="applikasjon">
    
    
    <div class="row">
  <div class="column" id="Seksti">
  <img id="Illustrasjon" src={Elever} alt="Illustrasjon"/>  
  <h2 id="Innledning">Med denne veilederen kan du utforske hvordan du ønsker å legge opp studieløpet ditt her ved OsloMet. 
            Utforsk de forskjellige fagene, og se hvilke konsekvenser valgt av fag vil ha senere i studiet.
        </h2>
        <p id="Padding">Veilederen er utviklet for at alle elever skal ta riktige valg underveis i lærerutdanningen. Målet
        er at du som student skal legge opp studieløpet riktig slik at du får en master innenfor det emnet du ønsker deg. Vi vet 
        at oppbyggingen av lærerutdanningen kan være vanskelig å forstå, og dermed er denne veilederen utviklet for å visualisere
        oppbyggingen av studiet på en bedre måte. 
        </p>

        </div>
  
  <div class="column" id="Forti">
  <img id="Illustrasjon" src={Praksis} alt="Illustrasjon"/>
  <h2 id="Innledning">Hvordan bruke veilederen?
        </h2>
        <p id="Padding">1. Velg studieretning, det første valget du får er om du går grunnskoleutdanning 1-7 eller grunnskoleutdanning 5-10. <br /><br />

        2. Deretter får du muligheten til å velge hvilket masteremne du vil gå opp til i 10. semester. Basert på valget du tar vil studieplanen 
        oppdatere seg med de fagene du trenger for valgt masteremne.
        <br /><br />

        3. Siste del er å fylle inn planen med valgfag. 
        Husk at man trenger 60 studiepoeng i syklus 1 for å ta faget videre i syklus 2. Om du har to fag kan du velge selv i semester 7    
        </p>

        <p id="Bold">Scroll ned for å starte veilederen!</p>
  </div>
</div>

<div class="row" id="Start">
<div class="column" id="Hundre">
  
        
            <h3>1.Velg studieretning </h3>      
            <h2>Velg din studieretning ved OsloMet</h2>
            <div className='introknapp'>
            
                
                    {
                        //sjekker om klassetrinn er ok, deretter mappe gjennom klassene
                        klassetrinn && 
                        klassetrinn.map((klasse) =>(
                            <CustomButton className="benButton"
                            key={klasse.id}
                            options={klasse}
                            onClick={() =>{ 
                                //setter statene fra øverst, og funksjonen handleclick
                                setObj(klasse)  
                                setAnswer(klasse.id)
                                handleClick(klasse.id)
                                visVidereClick(visVidere)
                                
                            }}
                            >
                            Grunnskolelærer {klasse.klassetrinn} trinn
                            </CustomButton>  
                        ))
                    }
            </div>
        </div> 
     </div> 
            
            
                {
                    //gjør answer og obj til props, slik at den kan brukes i ObligFagCard
                    //answer blir klasse id, som blir satt i onClick funkjsonen
                    visVidere &&
                    <VelgMaster 
                    answer={answer}
                    obj={obj}
                    />                       
                }
            
        </div>   
          
     );
}
 
export default KlasseList;