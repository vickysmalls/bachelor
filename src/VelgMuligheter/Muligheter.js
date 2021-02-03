import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
const _ = require("lodash");  




const Muligheter = ({masterId, semester}) => {

    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);
   
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
                        sorted.map((oblig)=>(
                            
                            //om masterFagId (fra database) er det samme som masterId (hentet fra VelgMaster) 
                            oblig.masterFagId === masterId &&
                            oblig.semester === semester &&
                                <CustomButton
                                    //setter fargen på den valgte fagveien
                                    style={{backgroundColor: 'red'}} 
                                    key={oblig.id}
                                    fag={oblig.fagnavn}
                                    onClick ={() =>{
                                        handleClick(oblig);
                                    }}
                                >
                                    {oblig.fagnavn}
                                </CustomButton>
                                 
                            ))

            }
            
 
        </>
        
        
        
        
     );
};
export default Muligheter;
