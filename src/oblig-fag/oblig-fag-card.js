import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import SingelKlasse from '../VelgKlasse/SingleKlasse';
import VelgMaster from '../VelgMaster/VelgMaster';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';


const ObligFagCard = ({answer, masterId, obj}) => {

    
    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/obligfag/`);
    //const [obj, setObj] = useState(klassetrinn);
    const [obligState, setObligState] = useState();
    const [visVidere, setVisVidere] = useState(false);

    function visVidereClick(visVidere){
        console.log('vis videre klikket');
        console.log(visVidere);
        
        setVisVidere(true)
    }
    
   
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

        <div>{
                <CustomButton onClick={() => {visVidereClick(visVidere)}} >Videre</CustomButton>
            }</div>
        <div className="ny">
        {
            
            visVidere&&
            <VelgMuligheter masterId={masterId} answer={answer}></VelgMuligheter>
            

       
        }
        
        </div>
        </div>
        
        
     );
};
export default ObligFagCard;