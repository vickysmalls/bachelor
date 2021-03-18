import React, {useReducer, useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';
import ObligFagSemester from '../oblig-fag/oblig-fag-semester';
import Semester from '../Semester/Semester';
import Print from '../Print/Print'
import useFetch from '../useFetch';
import Muligheter from './Muligheter';
import ValgtMulighet from './ValgtMulighet';
import "bootstrap/dist/css/bootstrap.min.css";
import '../VelgKlasse/VelgKlassetrinn.css';
import '../VelgMaster/VelgMaster.css';

import './muligheter.css';
import Resultat from './Resultat';
import Semester6Psyko from '../Semester/Semester6Psyko';


const _ = require("lodash");  



const VelgMuligheter = ({masterId, answer, fagNavn}) => {

    //database fetch
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);

    const [isOpen, setIsOpen] = useState(false);


    //for å filtrere muligheter i Semester, når man ser hva man har valgt
    const [muligheterId1, setMuligheterId1] = useState();
    const [muligheterId2, setMuligheterId2] = useState();
    const [muligheterId3, setMuligheterId3] = useState();

    const [mulighetTull, setMulighetTull] = useState();
    const [mulighetTull2, setMulighetTull2] = useState();



    const [valgtFag4, setValgtFag4] = useState();
   
    


    

    const [activeButton, setActiveButton] = useState();
    function handleReset(){
        setMulighetTull("");
        setActiveButton('');
        setMuligheterId1('');
      }


    // farge for for semester 6
    const [activeButton2, setActiveButton2] = useState();

    //Set semester 7 liste
    const [semesterList7, setSemesterList7] = useState();

    const [videre, setVidere] = useState(false);

    console.log('tull', mulighetTull);
    console.log('masterId', masterId);

    
    //lager et array som sortrer etter semester
    const iteratees = obj => obj.semester;
    const sorted = _.sortBy(klassetrinn, iteratees);

   
    
                    
    return ( 
        
        
        <>

        <h5>Semester 4</h5> 
        <div className='fag'>
        {
            //reset setMulighetTull i master
            <Muligheter  setSemesterList7={setMulighetTull2} fagNavn={fagNavn}  klassetrinn={klassetrinn} sorted={sorted} semester={4} masterId={masterId}/>
        } 

        {
            //Hvis valgt masterId er 1,2,10,11,12: hvis alle fag for semesteret
            (
                //masterId ===1  || masterId ===2  || masterId ===3  || masterId ===11 || 
                fagNavn.includes('Norsk')  || fagNavn.includes('Matte')  || fagNavn.includes('Profesjonsrettet pedagogikk') ||
                masterId ===12 || masterId ===13 || masterId ===14 || masterId ===15 || 
                masterId ===16 || masterId ===17 || masterId ===24 || masterId ===25 || 
                masterId ===26 || masterId ===27 
            ) 
        ? 
            (
                <Semester 
                    setMuligheterId={setMuligheterId1} 
                    muligheterId={muligheterId1}
                    setValgtFag={setValgtFag4} 
                    valgtFag={valgtFag4} 
                    klassetrinn={klassetrinn} 
                    semester={4} 
                    klasseId ={answer}
                    activeButton={activeButton}
                    setActiveButton ={setActiveButton}
                    
                />
            ) 
        : 
            null
        }
        <button onClick={() => handleReset()} >Reset</button>
        

        </div>

        <h2>Semester 5</h2>
        <div className='fag'>
        {
            <Muligheter setSemesterList7={setMulighetTull2} semesterList7={mulighetTull} klassetrinn={klassetrinn} sorted={sorted} semester={5} masterId={masterId}/>
        } 

        {
            (
                fagNavn.includes('Profesjonsrettet pedagogikk')|| masterId ===12 || masterId ===13 || masterId ===14 || masterId ===15 || 
                masterId ===16 || masterId ===17  || masterId ===25 || masterId ===26 || 
                masterId ===27
            ) 
        ? 
            (
                
                <Semester activeButton={activeButton} setActiveButton ={setActiveButton}  setMuligheterId={setMuligheterId2} muligheterId={muligheterId2} klassetrinn={klassetrinn} semester={5} klasseId ={answer}/>
            ) 
        : 
            null
        }
        
        
        </div>

        <h2>Semester 6</h2>
        <div className='fag'>
        
        
        {
            <Muligheter setSemesterList7={setMulighetTull2}  klassetrinn={klassetrinn} sorted={sorted} semester={6} masterId={masterId}/>
        } 

        {(
            //masterId ===1  || masterId ===2  || masterId ===3  || masterId ===4  || masterId ===5  ||
            fagNavn.includes('Norsk')  || fagNavn.includes('Matte')  ||fagNavn.includes('Engelsk')|| fagNavn.includes('KRLE')  ||fagNavn.includes('Kroppsøving')|| 
            //masterId ===6  || masterId ===7  || masterId ===8  || masterId ===9  || masterId ===10 || 
            fagNavn.includes('Kunst og håndverk')  || fagNavn.includes('Musikk')  ||fagNavn.includes('Naturfag')|| fagNavn.includes('Samfunnsfag')  || 

            fagNavn.includes('Pedagogikk') || masterId ===15 || masterId ===16 || masterId ===17 || masterId === 18 ||
            masterId ===19 || masterId ===20 || masterId ===21 || masterId ===22 || masterId ===23 
         ) 
         ? 
         (
             <>
            <Semester6Psyko activeButton={activeButton2} setActiveButton ={setActiveButton2} setMuligheterId={setMuligheterId3} muligheterId={muligheterId3} klassetrinn={klassetrinn} semester={6} klasseId ={answer}/>
           
                <Semester 
                setMuligheterId={setMuligheterId3} 
                muligheterId={muligheterId3}
                klassetrinn={klassetrinn} 
                semester={4} 
                klasseId ={answer}
                activeButton={activeButton2}
                setActiveButton ={setActiveButton2}
                
                
                
            />
            </>
        ) 
        : null
        }
    

        </div>
{console.log('semesterList7', semesterList7)}
        
        <h2>Semester 7</h2>
        <div className='fag'>
        
        {
            <Muligheter  setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={masterId}/>
            
        } 

        
        {
            <Semester setSemesterList7={setSemesterList7}   klassetrinn={klassetrinn} semester={7} klasseId ={answer}/>
        
        }
        {
            <ObligFagSemester setSemesterList7={setSemesterList7}   semester={7} answer={answer}/>
        }
        {
            (
            masterId === 12 || masterId === 13 || masterId === 14 ||
            masterId ===15 || masterId ===16 || masterId ===17 || masterId ===18 || masterId ===19 ||
            masterId ===20 || masterId ===21  ||masterId ===22 || masterId ===23 ||masterId ===24 || 
            masterId ===25 || masterId ===26 || masterId ===27
            ) 
        ? 
            (
                
                <Muligheter setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={activeButton}/>
                ) 
        : 
            null
        }
        
        
        
        
        </div>

        <h2>Semester 8</h2>
        <div className='fag'>
        
        {
            <Muligheter setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={masterId}/>
        } 

        {masterId === 1 && (
            <Semester setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} semester={8} klasseId ={answer}/>
        )
        }
        {
            
            <ObligFagSemester setSemesterList7={setSemesterList7} semester={8} answer={answer}/>

        }
        {
            (
            masterId === 12 || masterId === 13 || masterId === 14 ||
            masterId ===15 || masterId ===16 || masterId ===17 || masterId ===18 || masterId ===19 ||
            masterId ===20 || masterId ===21  ||masterId ===22 || masterId ===23 ||masterId ===24 || 
            masterId ===25 || masterId ===26 || masterId ===27
            ) 
        ? 
            (
                
                <Muligheter setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={activeButton}/>
                ) 
        : 
            null
        }
        
        </div>

        <h2>Semester 9</h2>
        <div className='fag'>
        
        {
            <Muligheter setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={masterId}/>
        } 

        {masterId ===1 && (
            <Semester setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} semester={9} klasseId ={answer}/>
        )
        }
        {
            <ObligFagSemester setSemesterList7={setSemesterList7} semester={9} answer={answer}/>
        }
        {
            (
            masterId === 12 || masterId === 13 || masterId === 14 ||
            masterId ===15 || masterId ===16 || masterId ===17 || masterId ===18 || masterId ===19 ||
            masterId ===20 || masterId ===21  ||masterId ===22 || masterId ===23 ||masterId ===24 || 
            masterId ===25 || masterId ===26 || masterId ===27
            ) 
        ? 
            (
                
                <Muligheter setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={activeButton}/>
                ) 
        : 
            null
        }
        </div>
        
        <h2>Semester 10</h2>
        <div className='fag'>
        {
            //Om semesterList7 er true (altså har blitt satt i 7)
            semesterList7 ? (
                <Muligheter setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={semesterList7}/>
            ) : (
                <Muligheter setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={masterId}/>

            )
            
        } 
        </div>

        <div className="videreknapp">
        <CustomButton onClick={() => setVidere(true)}>Videre</CustomButton>
        </div>

        <div className="sluttskjerm">
        { //Viser hele studieløpet om man trykker på videreknappen
        videre &&
        <>
        <Resultat 
            answer={answer} 
            klassetrinn={klassetrinn} 
            sorted={sorted} 
            activeButton={activeButton} 
            muligheterId1={muligheterId1} 
            muligheterId2={muligheterId2} 
            muligheterId3={muligheterId3} 
            masterId ={masterId}
            semesterList7={semesterList7}
            mulighetTull={mulighetTull}
            fagNavn={fagNavn}

            klasseId={answer}


        />
            
        </>
        }
    </div>
    </>
        
     );
     
};

export default VelgMuligheter;