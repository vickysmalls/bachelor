import React, {useState} from 'react'
import './VelgMaster.css';
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import SingelKlasse from '../VelgKlasse/SingleKlasse';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';


const VelgMaster = ({answer}) => {

    //setter masterfag tabellen til masterFag
    const {data: masterFag, error, isPending} = useFetch(`http://localhost:5000/api/masterfag/`);
    
    // slik at det brukes/ lagres i neste komponent
    const [fagNavn, setFagnavn] = useState();
    const [masterId, setMasterId] = useState();
    
    
    /*
    Forsøk på filtrering

    //const {data: muligheter} = useFetch(`http://localhost:5000/api/muligheter/`);
    const filterSemester = (semester) =>{
        setSemester(muligheter.filter((klasse) => klasse.semester === semester
        ))
      }*/
    
   
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
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
                            //filterSemester(oblig.filterSemester)
                            //setter funcksjoner og states når den trykkes på
                            handleClick(oblig)
                            setMasterId(oblig.id)
                            setFagnavn(oblig.fagnavn)
                            //setSemester(oblig.semester)
                        }}
                        >
                         {oblig.fagnavn}
                    </CustomButton>
                    ))
                    
               
          
            }
            {
                

           
            }
 
        </div>
        <div className="ny">
        {
            //lager props av statene slik at de kan brukes i VelgMuligheter komponenten
            <VelgMuligheter masterId={masterId} fagNavn={fagNavn}/>
            //<h1>{props.answer}</h1>
        }
        </div>
        </div>
        
        
     );
};
export default VelgMaster;
