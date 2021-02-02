import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';
const _ = require("lodash");  


//Denne koomponenten gjør at man kan plotte inn semestesr og klasse id(answer) i oblig-fag-card
const ObligFagSemester = ({answer, semester, masterId, obj}) => {

    
    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/obligfag/`);

    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }


    //lager et array som sortrer etter semester
    const iteratees = obj => obj.semester;
    const sorted = _.sortBy(klassetrinn, iteratees);
    

    

    return ( 
        <>
       
        
            
            {
                
                    // det sorterte arrayet mappes
                    sorted.map((oblig)=>(
                        //om klasseId er det samme som answer fra KlasseList =>
                        oblig.klasseId ===answer &&
                        oblig.semester ===semester &&
                        <CustomButton 
                            key={oblig.id}
                            
                        >
                         {oblig.fagnavn}
                        </CustomButton>
                        
                    ))
            }
            {
                
            }
            
            
 
        

        
        
        
        
        </>
        
        
     );
};
export default ObligFagSemester;