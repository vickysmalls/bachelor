import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import ObligFag from '../oblig-fag/oblig-fag';
import ObligFagCard from '../oblig-fag/oblig-fag-card';
import useFetch from '../useFetch';
import SemesterCard5 from './Semester5-card';

const Semester5Gammel = ({masterId, semester}) => {
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);
    
    
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
                            oblig.semester === 5 &&
                            
                            <div className=''>
                            
                            
                                <CustomButton 
                                    key={oblig.id}
                                    semester={oblig.semester}
                                    onClick = {() =>{
                                        handleClick(oblig)
                                        
                                    }}
                                >
                                    semester:{oblig.semester}, fag: 
                                    {oblig.fagnavn}
                                </CustomButton>
                                <SemesterCard5 semester ={semester}/>
                                          
                            </div>
                ))
            }
 
        </div>
        
    </div>
        
        
     );
}
 
export default Semester5Gammel;