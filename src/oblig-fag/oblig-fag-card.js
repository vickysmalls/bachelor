import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import SingelKlasse from '../VelgKlasse/SingleKlasse';
import VelgMaster from '../VelgMaster/VelgMaster';


const ObligFagCard = ({answer, obj}) => {

    
    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/obligfag/`);
    //const [obj, setObj] = useState(klassetrinn);
    const [obligState, setObligState] = useState();
    
    
   
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }
    

    return ( 
        <div>
        <h2>Obligs</h2>
        <div className='card-container'>

            {
                klassetrinn &&
                    klassetrinn.map((oblig)=>(
                        //om klasseId er det samme som answer fra KlasseList =>
                        oblig.klasseId ===answer &&
                        <CustomButton 
                            key={oblig.id}
                            options={oblig}
                            onClick={() =>{
                                
                                handleClick(oblig)
                                setObligState(oblig)
                            }}
                        >
                         {oblig.fagnavn}
                    </CustomButton>
                    ))
                   
                    
                    
               
          
            }
            
 
        </div>
        <div className="ny">
        {
            
            <VelgMaster answer={answer}></VelgMaster>
            

       
        }
        
        </div>
        </div>
        
        
     );
};
export default ObligFagCard;