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
            
            <Semester semester={4}/>
        }
        
        </div>

        <div className='card-container'>
        <h3>Semester 5, alle fag</h3>
        
        {
            
            <Semester semester={5}/>
        }
        
        </div>

        <div className='card-container'>
        <h3>Semester 6, alle fag</h3>
        
        {
            
            <Semester semester={6}/>
        }
        
        </div>

        <div className='card-container'>
        <h3>Semester 7, alle fag</h3>
        
        {
            
            <Semester semester={7}/>
        }
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 8</h3>
        
        {
            
            <Semester semester={8}/>
        }
        
        </div>

        <div className='card-container'>
        <h3>Semester 9</h3>
        
        {
            
            <Semester semester={9}/>
        }
        

        </div>

        
        </div>
        
        
     );
};
export default VelgMuligheter;
