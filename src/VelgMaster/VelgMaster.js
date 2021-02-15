import React, {useState} from 'react'
import './VelgMaster.css';
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import ObligFagCard from '../oblig-fag/oblig-fag-card';
const _ = require("lodash");  



const VelgMaster = ({answer}) => {

    //setter masterfag tabellen til masterFag
    const {data: masterFag, error, isPending} = useFetch(`http://localhost:5000/api/masterfag/`);
    
    // slik at det brukes/ lagres i neste komponent
    const [fagNavn, setFagnavn] = useState();
    const [masterId, setMasterId] = useState();
    //const [mulighetTrue, setMulighetTrue] = useState();
    const [visVidere, setVisVidere] = useState(false);
    const [farge, setFarge] = useState();
    const [obj, setObj] = useState();


    
   
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }

    function byttFarge(farge){
        console.log('vis videre klikket');
        console.log(visVidere);
        
        
    }


    return ( 
        <div>
        <h2>Velg Masteremne</h2>
        <div className='card-container'>

            {
                masterFag &&
                    
                    masterFag.map((oblig)=>(
                        
                        //om klasseId er det samme som answer (klassetrinn id) fra KlasseList =>
                        oblig.klasseId === answer &&
                        
                    <CustomButton 
                        key={oblig.id}
                        options={oblig}
                        
                        onClick={() =>{
                            handleClick(oblig)
                            setMasterId(oblig.id)
                            setFagnavn(oblig.fagnavn)
                            setVisVidere(true)
                            
                        }}
                        >
                         {oblig.fagnavn}
                    </CustomButton>
                    ))
            }
           
        </div>

        <div className="ny">
        {   
            visVidere&&
            <ObligFagCard masterId={masterId} fagNavn={fagNavn} answer={answer}/>
        
        }
        
        </div>
        </div>
        
        
     );
};
export default VelgMaster;
