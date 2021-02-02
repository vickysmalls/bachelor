import React, {useState} from 'react'
import Semester from '../Semester/Semester';
import useFetch from '../useFetch';
import Muligheter from './Muligheter';



const VelgMuligheter = ({masterId}) => {

    
    return ( 
        <div>
        <h2>muligheter</h2>
        <div className="fag-card">
        
        </div>

        <div className='card-container'>
        <h3>Semester 4, alle fag</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={4} masterId={masterId}/>

        }
        {
            
            <Semester semester={4}/>
        }
        
        </div>

        <div className='card-container'>
        <h3>Semester 5, alle fag</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={5} masterId={masterId}/>

        }
        {
            
            <Semester semester={5}/>
        }
        
        </div>

        <div className='card-container'>
        <h3>Semester 6, alle fag</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={6} masterId={masterId}/>

        }
        {
            
            <Semester semester={6}/>
        }
        
        </div>

        <div className='card-container'>
        <h3>Semester 7, alle fag</h3>
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
