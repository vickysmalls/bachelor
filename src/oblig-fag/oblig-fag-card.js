import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';
import ObligFagSemester from './oblig-fag-semester';
import './oblig-fag.css';

const ObligFagCard = ({answer, masterId, obj}) => {

    
    
    const [visVidere, setVisVidere] = useState(false);
    
    function visVidereClick(visVidere){
        console.log('vis videre klikket');
        console.log(visVidere);
        
        setVisVidere(true)
    }
 
    return ( 
        
        <>
        <h2>Obligs</h2>
        <h2>Semester 1</h2> 
        <div className="fag">
            {
                    // det sorterte arrayet mappes
                    <ObligFagSemester semester={1} answer={answer}/>
            }
            </div>

       

        
        <div className="card-container">
        <h2>Semester 2</h2>
            {
                    // det sorterte arrayet mappes
                <ObligFagSemester semester={2} answer={answer}/>
            }
        </div>
        
            

       
        
        <div className="card-container">
        <h2>Semester 3</h2>
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
        
       
        </>
        
        
     );
};
export default ObligFagCard;