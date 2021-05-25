import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import './VelgKlassetrinn.css';
import {handleClick} from '../Helpers';



const VelgKlasse = ({ handleScrollClick, klassetrinn, setVisVidere, visVidere, setAnswer, setObj}) => {
     
     
    //Sette farge valgt semester
    const [activeButton, setActiveButton] = useState();

    const onSideBtnClick = (e) => {
        setActiveButton(e.id);
        
        //alert(e.id);
    };
    
    
    function visVidereClick(visVidere){
 
         
         setVisVidere(true)
     }
    
    return ( 
        <>
        
        {
            //sjekker om klassetrinn er ok, deretter mappe gjennom klassene
            klassetrinn && 
            klassetrinn.map((klasse) =>{
                const className = activeButton === klasse.id ? "red" : "";

                return (
                    
                    <CustomButton id='hoydeBenBtn'
                    key={klasse.id}
                    options={klasse}
                    inverted={className}
                    onClick={() =>{ 
                        //setter statene fra øverst, og funksjonen handleclick
                        setObj(klasse)  
                        setAnswer(klasse.id)
                        handleClick(klasse.id)
                        visVidereClick(visVidere)
                        handleScrollClick()
                        onSideBtnClick(klasse)
                        
                    }}
                    >
                    Grunnskolelærer trinn {klasse.klassetrinn}
                    </CustomButton>  
                    
                )
                })
        }
        </>
     );
}
 
export default VelgKlasse;