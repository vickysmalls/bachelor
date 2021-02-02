import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import ObligFag from '../oblig-fag/oblig-fag';
import ObligFagCard from '../oblig-fag/oblig-fag-card';
import Semester5 from '../Semester/Semester5';
import useFetch from '../useFetch';
const _ = require("lodash");  




const Muligheter = ({obj, masterId, semester}) => {

    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);
    //const [answer, setAnswer] = useState();
    //const [mulighetId, setMulighetId] = useState();
    const [semesterId, setSemesterId] = useState();

    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }

       //lager et array som sortrer etter semester
       const iteratees = obj => obj.semester;
       const sorted = _.sortBy(klassetrinn, iteratees);
    
    

    return ( 
        <div>
        
        <div className=''>

            {              
                        sorted.map((oblig)=>(
                            
                            //om masterFagId (fra database) er det samme som masterId (hentet fra VelgMaster) 
                            oblig.masterFagId === masterId &&
                            oblig.semester === semester &&
                                <CustomButton 
                                    key={oblig.id}
                                    
                                    fag={oblig.fagnavn}
                                    
                                    onClick={() => {
                                        setSemesterId(oblig.semester)
                                        

                                    }}
                                    
                                    >
                                    {oblig.fagnavn}
                                </CustomButton>
                                
                                
                                
                                
                            ))
                    
               
          
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
export default Muligheter;
