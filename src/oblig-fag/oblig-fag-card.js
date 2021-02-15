import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';
import ObligFagSemester from './oblig-fag-semester';
const _ = require("lodash");  



const ObligFagCard = ({answer, masterId, obj}) => {

    
    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/obligfag/`);
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

        <h2>Semester 1</h2>
        <div className='card-container'>
            {
                    // det sorterte arrayet mappes
                    <ObligFagSemester semester={1} answer={answer}/>
            }

        </div>

        <h2>Semester 2</h2>
        <div className='card-container'>
            {
                    // det sorterte arrayet mappes
                    <ObligFagSemester semester={2} answer={answer}/>
            }

        </div>
        <h2>Semester 2</h2>
        <div className='card-container'>
            {
                    // det sorterte arrayet mappes
                    <ObligFagSemester semester={3} answer={answer}/>
            }

        </div>

        

        <div>
            {
                <CustomButton onClick={() => {visVidereClick(visVidere)}} >Videre</CustomButton>
            }
        </div>
        
        <div className="ny">
        {
            
            visVidere&&
            <VelgMuligheter masterId={masterId} answer={answer} obj={obj}></VelgMuligheter>
            

       
        }
        
        </div>
        </div>
        
        
     );
};
export default ObligFagCard;