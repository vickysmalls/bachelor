import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import { Modal } from '../Modal/Modal';
import ObligFagSemester from '../oblig-fag/oblig-fag-semester';
import Semester from '../Semester/Semester';
import useFetch from '../useFetch';
import Muligheter from './Muligheter';
import {FaEnvelopeOpenText} from 'react-icons/fa';

const _ = require("lodash");  


//popup

const VelgMuligheter = ({masterId, answer}) => {

    //database fetch
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);

    
    //lager et array som sortrer etter semester
    const iteratees = obj => obj.semester;
    const sorted = _.sortBy(klassetrinn, iteratees);
 
    const [show, setShow] = useState(false);

    const close = () =>{
        setShow(false);
    }
   


    return ( 
        
        
        <>
        {show ? <div onClick={close} > </div> : null}
        <button className='btn-openModal' onClick={() => setShow(true)}>
          Open Modal
        </button>

       

        <h2>muligheter</h2>


        <div className='card-container'>
        <h3>Semester 4</h3>
        
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={4} masterId={masterId}/>
        } 

        {
            //Hvis valgt masterId er 1,2,10,11,12: hvis alle fag for semesteret
            (
                masterId ===1 || masterId ===2 || masterId ===10  || 
                masterId ===11 || masterId ===12 || masterId ===13 || masterId ===27
            ) 
        ? 
            (
                <Semester klassetrinn={klassetrinn} semester={4} klasseId ={answer}/>
            ) 
        : 
            null
        }
        
        
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 5</h3>
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={5} masterId={masterId}/>
        } 

        {
            (
                masterId ===10  || masterId ===11 || masterId ===12 || masterId ===13 
            ) 
        ? 
            (
                <Semester klassetrinn={klassetrinn} semester={5} klasseId ={answer}/>
            ) 
        : 
            null
        }
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 6</h3>
        
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={6} masterId={masterId}/>
        } 

        {(
            masterId ===1  || masterId ===2 || masterId ===3 || masterId ===4 || masterId ===5 ||
            masterId ===6 || masterId ===7 || masterId ===8 || masterId ===9 || masterId ===27
         ) 
         ? 
         (
            <Semester klassetrinn={klassetrinn} semester={6} klasseId ={answer}/>
         ) 
        : null
        }
    

        </div>

        <div className='card-container'>
        <h3>Semester 7</h3>
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={masterId}/>
        } 

        {masterId === 1 && (
            <Semester klassetrinn={klassetrinn} semester={7} klasseId ={answer}/>
        )
        }
        {
            <ObligFagSemester semester={7} answer={answer}/>
        }
        
        
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 8</h3>
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={masterId}/>
        } 

        {masterId === 1 && (
            <Semester klassetrinn={klassetrinn} semester={8} klasseId ={answer}/>
        )
        }
        {
            <ObligFagSemester semester={8} answer={answer}/>
        }
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 9</h3>
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={masterId}/>
        } 

        {masterId ===1 && (
            <Semester klassetrinn={klassetrinn} semester={9} klasseId ={answer}/>
        )
        }
        {
            <ObligFagSemester semester={9} answer={answer}/>
        }
        

        </div>

        
        </>
        
        
     );
};
export default VelgMuligheter;