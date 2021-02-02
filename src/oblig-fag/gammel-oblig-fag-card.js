import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';
import ObligFagSemester from './oblig-fag-semester';
const _ = require("lodash");  



const GamleObligFagCard = ({answer, masterId, obj}) => {

    
    
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


    //lager et array som sortrer etter semester
    const iteratees = obj => obj.semester;
    const sorted = _.sortBy(klassetrinn, iteratees);
    

    

    return ( 
        <div>
        <h2>Obligs</h2>
        <div className='card-container'>
            
            {
                
                klassetrinn &&
                    // det sorterte arrayet mappes
                    sorted.map((oblig)=>(
                        //om klasseId er det samme som answer fra KlasseList =>
                        oblig.klasseId ===answer &&
                        oblig.semester ===1 &&
                        <CustomButton 
                            key={oblig.id} 
                        >
                         {oblig.fagnavn}
                        </CustomButton>
                        
                    ))
            }

        </div>

        
        <div className='card-container'>
            
            {
                
                klassetrinn &&
                    // det sorterte arrayet mappes
                    sorted.map((oblig)=>(
                        //om klasseId er det samme som answer fra KlasseList =>
                        oblig.klasseId ===answer &&
                        oblig.semester ===2 &&
                        <CustomButton 
                            key={oblig.id} 
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
export default GamleObligFagCard;