import { useState  } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import VelgMaster from "../VelgMaster/VelgMaster";
import './VelgKlassetrinn.css';


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
            <h2>Velg Klassetrinn</h2>
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