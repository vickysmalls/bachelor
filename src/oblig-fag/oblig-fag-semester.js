import React, {useState} from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa';
import CustomButton from '../CustomButton/CustomButton';
import Popup from '../Popup/Popup';
import useFetch from '../useFetch';
const _ = require("lodash");  


//Denne koomponenten gjør at man kan plotte inn semestesr og klasse id(answer) i oblig-fag-card
const ObligFagSemester = ({answer, semester}) => {

    
    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/obligfag/`);


    const [buttonPopup, setButtonPopup] = useState(false);
    const [fagnavn, setFagnavn] = useState();
    //const [semester, setSemester] = useState();
    const [emnekode, setEmneKode] = useState();
    const [studiepoeng, setStudiepoeng] = useState();
    const [klasseId ,setKlasseId] = useState();
    

    //lager et array som sortrer etter semester
    const iteratees = obj => obj.semester;
    const sorted = _.sortBy(klassetrinn, iteratees);
    

    return ( 
        
        <>
        <div className="card-container">
         {
                
                    // det sorterte arrayet mappes
                    sorted.map((oblig)=>(
                        //om klasseId er det samme som answer fra KlasseList =>
                        oblig.klasseId ===answer &&
                        oblig.semester ===semester &&
                        <>
                        <button 
                            onClick={() =>{ 
                                setButtonPopup(true)
                                setFagnavn(oblig.fagnavn)
                                //setSemester(oblig.semester)
                                setEmneKode(oblig.emnekode)
                                setStudiepoeng(oblig.studiepoeng)
                                setKlasseId(oblig.klasseId)
                                
                            }}>

                            <FaEnvelopeOpenText size='2em'/>
                        </button>

                       

                        <CustomButton 
                            key={oblig.id}
                            
                        >
                         {oblig.fagnavn}
                        </CustomButton>
                        
                      </>  
                    ))
                    
            }
        </div>
        <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
            <h3>Info om {fagnavn}</h3><br/>
           
                <ul>
                    <li>
                    Fagnavn: {fagnavn}
                    </li>
                    <li>
                    Emnekode: {emnekode}
                    </li>
                    <li>
                    Studiepoeng: {studiepoeng}
                    </li>
                    <li>
                    klassetrinn: {klasseId}
                    </li>
                </ul>

            </Popup>

        </>
        
        
        
        
     );
     
};
export default ObligFagSemester;