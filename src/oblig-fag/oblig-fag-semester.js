import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
const _ = require("lodash");  


//Denne koomponenten gjør at man kan plotte inn semestesr og klasse id(answer) i oblig-fag-card
const ObligFagSemester = ({answer, semester}) => {

    
    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/obligfag/`);

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