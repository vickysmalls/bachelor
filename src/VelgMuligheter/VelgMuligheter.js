import React, {useState} from 'react'
import ObligFagSemester from '../oblig-fag/oblig-fag-semester';
import Semester from '../Semester/Semester';
import useFetch from '../useFetch';
import Muligheter from './Muligheter';



const VelgMuligheter = ({masterId, answer}) => {

    
    const [isTrue, setIsTrue] = useState(false);

    return ( 
        <div>
        <h2>muligheter</h2>


        <div className='card-container'>
        <h3>Semester 4</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={4} masterId={masterId}/>

        }
        {
            <Semester semester={4} klasseId ={answer}/>
        }
        
        
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 5</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={5} masterId={masterId}/>

        }
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 6</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter setIsTrue={true} semester={6} masterId={masterId}/>

        }
        {
            
            <Semester semester={6} klasseId ={answer}/>
        }
        

        </div>

        <div className='card-container'>
        <h3>Semester 7</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={7} masterId={masterId}/>

        }
        
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 8</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={8} masterId={masterId}/>
            

        }
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 9</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={9} masterId={masterId}/>
           
        }
        
        

        </div>

        
        </div>
        
        
     );
};
export default VelgMuligheter;
