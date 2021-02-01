import { useState  } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import VelgMaster from "../VelgMaster/VelgMaster";
import FagCard from '../oblig-fag/oblig-fag';
import ObligFagCard from "../oblig-fag/oblig-fag-card";


const KlasseList = ({ handleClick}) => {

    //henter tabellen klasser og plasserer det i klassetrinn
    const {data: klassetrinn, error, isPending} = useFetch('http://localhost:5000/api/klasser');

    //setter klassetrinn til å bli answer
    const [answer, setAnswer] = useState(klassetrinn);

    //brukes til å lagre objektet
    const [obj, setObj] = useState();
    const [obligState, setObligState] = useState();
    const [to, setTo] = useState();
    
    
    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        console.log(e);
        const id = e.id;
        console.log('id fra handleClick = '+id);
        
    }
    
    return ( 
        
        <div className="klasse-list">
        <h2>Velg Klassetrinn</h2>
            
            {
                //sjekker om klassetrinn er ok, deretter mappe gjennom klassene
                klassetrinn && 
                klassetrinn.map((klasse) =>(
                    <CustomButton 
                    key={klasse.id}
                    options={klasse}
                    
                    onClick={() =>{
                        //setter statene fra øverst, og funksjonen handleclick
                        setObj(klasse)  
                        setObligState(klasse.fagnavn)
                        setAnswer(klasse.id)
                        handleClick(klasse.id)
                    }}
                    >
                    Grunnskolelærer {klasse.klassetrinn} trinn
                    </CustomButton>
                    

                    
                ))
                
                
            }
            {
                //gjør answer og obj til props, slik at den kan brukes i ObligFagCard
                //aswer blir klasse id, som blir satt i onClick funkjsonen
                
                <ObligFagCard 
                answer={answer}
                obj={obj}    

                />
                
            }
            
            
            {
                
            }
            

           
            
        </div>
     );
}
 
export default KlasseList;