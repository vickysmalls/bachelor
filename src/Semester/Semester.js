import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';

import useFetch from '../useFetch';

const Semester = ({klasseId, semester, klassetrinn}) => {
    //const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);
    
    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }
    
    return ( 
        <div>
        
        <div className=''>
        
            {
                klassetrinn &&
                        klassetrinn.map((oblig)=>(
                            
                            //oblig.MasterFagId === masterId &&
                            //om semester = 5 vis semester og semeseter fag
                            oblig.semester === semester &&
                            oblig.klasseId === klasseId &&
                            
                            <div className=''>
                            
                            
                                <CustomButton 
                                    key={oblig.id}
                                    semester={oblig.semester}
                                    klasseId = {oblig.klasseId}
                                    onClick = {() =>{
                                        handleClick(oblig)

                                    }}
                                >
                                    semester:{oblig.semester}, fag: 

                                    {oblig.fagnavn}
                                </CustomButton>
                               
                                          
                            </div>
                ))
            }
 
        </div>
        
    </div>
        
        
     );
}
 
export default Semester;