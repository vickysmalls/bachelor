import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import './VelgKlassetrinn.css';
import {handleClick} from '../Helpers';



const VelgKlasse = ({handleScrollClick, klassetrinn, setVisVidere, visVidere, setAnswer, setObj}) => {
     
     
 
     function visVidereClick(visVidere){
         console.log('vis videre klikket');
         console.log(visVidere);
         
         setVisVidere(true)
     }
    
    return ( 
        <>
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
                    handleScrollClick()
                    
                }}
                >
                Grunnskolelærer {klasse.klassetrinn} trinn
                </CustomButton>  
            ))
        }
        </>
     );
}
 
export default VelgKlasse;