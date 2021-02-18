import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import Semester from '../Semester/Semester';
import useFetch from '../useFetch';
import { Modal } from '../Modal/Modal';
import { FaEnvelopeOpenText } from 'react-icons/fa';
const _ = require("lodash");  




const Muligheter = ({masterId, semester, setShow, show, klassetrinn, sorted, close}) => {

    
    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }

       //lager et array som sortrer etter semester
       //const iteratees = obj => obj.semester;
       //const sorted = _.sortBy(klassetrinn, iteratees);
    
    

       
    return ( 
        
        
        <>
        
       
      
        

            {   
                klassetrinn&&
                
                    sorted.map((oblig)=>(
                            
                            //om masterFagId (fra database) er det samme som masterId (hentet fra VelgMaster) 
                            oblig.masterFagId === masterId &&
                            oblig.semester === semester &&
                            <>
                            
                            
                            
                        
                            <button onClick={() => setShow(true)} >
                            
                            <FaEnvelopeOpenText size='2em'/>
                            </button>
                                <CustomButton
                                
                                
                                    //setter fargen på den valgte fagveien
                                    style={{backgroundColor: 'red'}} 
                                    key={oblig.id}
                                    fag={oblig.fagnavn}
                                    
                                    onClick ={() =>{
                                        handleClick(oblig);
                                    
                                        
                                        
                                        
                                    }}
                                >
                                
                                    {oblig.fagnavn}
                                </CustomButton>
                                <Modal show={show} close = {close}/>

                            </>
                            
                        ))
                    }
                    
               </>
               
             );
            

            };
           

export default Muligheter;

