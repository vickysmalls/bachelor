import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import ObligFag from '../oblig-fag/oblig-fag';
import ObligFagCard from '../oblig-fag/oblig-fag-card';
import Semester5 from '../Semester/Semester5';
import useFetch from '../useFetch';



const VelgMuligheter = ({obj, masterId, semester}) => {

    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);
    //const [answer, setAnswer] = useState();
    //const [mulighetId, setMulighetId] = useState();
    const [semesterId, setSemesterId] = useState();

    

    
    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }
    
    

    return ( 
        <div>
        <h2>muligheter</h2>
        <div className=''>
        
            {
                klassetrinn &&
                        klassetrinn.map((oblig)=>(
                            
                            //om masterFagId (fra database) er det samme som masterId (hentet fra VelgMaster) 
                            oblig.masterFagId === masterId &&
                            
                            <div className='card-container'>
                            
                            
                                <CustomButton 
                                    key={oblig.id}
                                    semester={oblig.semester}
                                    fag={oblig.fagnavn}
                                    
                                    onClick={() => {
                                        setSemesterId(oblig.semester)
                                        

                                    }}
                                    
                                    >
                                    {oblig.fagnavn}
                                </CustomButton>
                                <CustomButton 
                                    >
                                    {obj}
                                </CustomButton>
                                <Semester5 semester ={oblig.semester} masterId ={oblig.masterFagId}/>
                                
                                
                            </div>))
                    
               
          
            }
            {
                

           
            }
 
        </div>
        <div className="ny">
        {
            
        }
        </div>
        </div>
        
        
     );
};
export default VelgMuligheter;
