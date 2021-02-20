import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import InfoButton from '../CustomButton/InfoButton';
import Modal from '../Modal/Modal';
import ObligFagSemester from '../oblig-fag/oblig-fag-semester';
import Semester from '../Semester/Semester';
import useFetch from '../useFetch';
import ResultatCard from '../VisResultat/Resultat-card';
import Muligheter from './Muligheter';

const _ = require("lodash");  



const VelgMuligheter = ({masterId, answer}) => {

    //database fetch
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);


    const [isOpen, setIsOpen] = useState(false);

    const [valgtFag4, setValgtFag4] = useState();
    const [valgtFag5, setValgtFag5] = useState();
    const [valgtFag6, setValgtFag6] = useState();


    const [videre, setVidere] = useState(false);



    
    //lager et array som sortrer etter semester
    const iteratees = obj => obj.semester;
    const sorted = _.sortBy(klassetrinn, iteratees);

   
 

    return ( 
        
        
        <>

        <h2>muligheter</h2>


        <div className='card-container'>
        <h3>Semester 4</h3> <h1>{valgtFag4}</h1>
        
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={4} masterId={masterId}/>
        } 

        {
            //Hvis valgt masterId er 1,2,10,11,12: hvis alle fag for semesteret
            (
                masterId ===1  || masterId ===2  || masterId ===3  || masterId ===11 || 
                masterId ===12 || masterId ===13 || masterId ===14 || masterId ===15 || 
                masterId ===16 || masterId ===17 || masterId ===24 || masterId ===25 || 
                masterId ===26 || masterId ===27 
            ) 
        ? 
            (
                <Semester setValgtFag={setValgtFag4} valgtFag={valgtFag4} klassetrinn={klassetrinn} semester={4} klasseId ={answer}/>
            ) 
        : 
            null
        }
        
        
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 5</h3><h1>{valgtFag5}</h1>
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={5} masterId={masterId}/>
        } 

        {
            (
                masterId ===11 || masterId ===12 || masterId ===13 || masterId ===14 || masterId ===15 || 
                masterId ===16 || masterId ===17 || masterId ===24 || masterId ===25 || masterId ===26 || 
                masterId ===27
            ) 
        ? 
            (
                <Semester setValgtFag={setValgtFag5} valgtFag={valgtFag5} klassetrinn={klassetrinn} semester={5} klasseId ={answer}/>
            ) 
        : 
            null
        }
        
        
        </div>

        <div className='card-container'>
        <h3>Semester 6</h3><h1>{valgtFag6}</h1>
        
        {
            <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={6} masterId={masterId}/>
        } 

        {(
            masterId ===1  || masterId ===2  || masterId ===3  || masterId ===4  || masterId ===5  || 
            masterId ===6  || masterId ===7  || masterId ===8  || masterId ===9  || masterId ===10 || 
            masterId ===11 || masterId ===15 || masterId ===16 || masterId ===17 || masterId === 18 ||
            masterId ===19 || masterId ===20 || masterId ===21 || masterId ===22 || masterId ===23 
         ) 
         ? 
         (
            <Semester setValgtFag={setValgtFag6} valgtFag={valgtFag6}  klassetrinn={klassetrinn} semester={6} klasseId ={answer}/>
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
        {
            
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

        <div>
        <CustomButton onClick={() => setVidere(true)}>Videre</CustomButton>
        </div>

        <div>
        {videre &&
            <>
            
           
           
        <div>
        <div className='card-container'>
            <div className="semester1">
            <h1>semester 1</h1>
                <ObligFagSemester semester={1} answer={answer}/>
            </div>
        </div>
        
            
            <div className='card-container'>
                <div className="semester2">
                <h1>semester 2</h1>
                    <ObligFagSemester semester={2} answer={answer}/>    
                </div>
            </div>
            <div className='card-container'>
                <div className="semester3">
                <h1>semester 3</h1>
                    <ObligFagSemester semester={3} answer={answer}/>    
                </div>
            </div>
            <div className='card-container'>
                <div className="semester4">
                <h1>semester 4</h1>
                    <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={4} masterId={masterId}/>
                    {valgtFag4 &&
                    <CustomButton>{valgtFag4}</CustomButton>}
                </div>
            </div>
            <div className='card-container'>
                <div className="semester5">
                <h1>semester 5</h1>
                    <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={5} masterId={masterId}/>
                    {valgtFag5 &&
                    <CustomButton>{valgtFag5}</CustomButton>   }
                </div>
            </div>
            <div className='card-container'>
                <div className="semester6">
                <h1>semester 6</h1>
                    <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={6} masterId={masterId}/>
                    {valgtFag6 &&
                        <CustomButton>{valgtFag6}</CustomButton>}
                </div>
            </div>
            <div className='card-container'>
                <div className="semester7">
                <h1>semester 7</h1>
                    <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={masterId}/>
                    <ObligFagSemester semester={7} answer={answer}/>

                </div>
            </div>
            <div className='card-container'>
                <div className="semester8">
                <h1>semester 8</h1>
                    <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={masterId}/>
                    <ObligFagSemester semester={8} answer={answer}/>

                </div>
            </div>
            <div className='card-container'>
                <div className="semester9">
                <h1>semester 9</h1>
                    <Muligheter  klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={masterId}/>
                    <ObligFagSemester semester={9} answer={answer}/>

                </div>
            </div>
            
           
        </div>
        </>
        }

        </div>

        

        
        </>
        
        
     );
};
export default VelgMuligheter;