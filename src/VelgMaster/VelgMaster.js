import React, {useState, useReducer} from 'react'
import './VelgMaster.css';
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import ObligFagCard from '../oblig-fag/oblig-fag-card';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import InfoButton from '../CustomButton/InfoButton';
import Modal from '../Modal/Modal';
const _ = require("lodash");  



const VelgMaster = ({answer}) => {

    //setter masterfag tabellen til masterFag
    const {data: masterFag, error, isPending} = useFetch(`http://localhost:5000/api/masterfag/`);
    
    // slik at det brukes/ lagres i neste komponent
    const [fagNavn, setFagnavn] = useState();
    const [masterId, setMasterId] = useState();
    const [visVidere, setVisVidere] = useState(false);    

     //Sette farge valgt semester
     const [activeButton, setActiveButton] = useState();
    
     const onSideBtnClick = e => {
        
        setActiveButton(e.id);
        //alert(e.id);
    };
   
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        console.log(e);
    }

   
    return ( 
        <>
        
        <div className='masterfag'>
            {
                masterFag && masterFag.map(oblig=>{
                    const className = activeButton === oblig.id ? "red" : "";

                    return(
                        //om klasseId er det samme som answer (klassetrinn id) fra KlasseList =>
                    oblig.klasseId === answer &&
                    
                    <>
                    
                    <div className='masterknapper'>
                        <CustomButton
                            inverted={className}
                            key={oblig.id}
                            options={oblig}
                            activeButton={activeButton}
                                        
                            onClick={() =>{
                                handleClick(oblig)
                                setMasterId(oblig.id)
                                setFagnavn(oblig.fagnavn)
                                setVisVidere(true)
                                onSideBtnClick(oblig)
                            }}
                            >
                            {oblig.fagnavn}
                        </CustomButton>
                    </div>    
                </>


                    )
                    
                        })
            }       
        </div>
        
        
        {   
            visVidere&&
            <ObligFagCard masterId={masterId} fagNavn={fagNavn} answer={answer}/>
        
        }
        
        
        
       
        
        </>

        
        
     );
};
export default VelgMaster;
