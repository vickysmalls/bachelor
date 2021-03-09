import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';
import ObligFagSemester from './oblig-fag-semester';
import './oblig-fag.css';

const ObligFagCard = ({answer, masterId, obj, fagNavn}) => {

    
    
    const [visVidere, setVisVidere] = useState(false);
    
    function visVidereClick(visVidere){
        console.log('vis videre klikket');
        console.log(visVidere);
        
        setVisVidere(true)
    }
 
    return ( 
        
        <>
        <h3>3. Obligatoriske emner</h3>
        <h2>Oversikt over obligatoriske emnene i de tre første semestrene</h2>
        <p>De tre første semesterene består kun av obligatoriske emner. Disse er felles for begge studieretninger og 
            påvirker ikke masteroppgaven. I løpet av de tre første semestrene vil alle gjennomføre eksamner i Norsk og Matematikk, 
            samt få innføring i pedagogikk.
        </p>
        <div className="obligatoriske semestre">
            <div classname="obligkort">
                <h2>Semester 1</h2> 
                <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
                <div className="fag">
                    {
                        // det sorterte arrayet mappes
                        <ObligFagSemester semester={1} answer={answer}/>
                    }
                </div>
            </div>
                

       
            <div className="obligkort">
                <h2>Semester 2</h2>
                <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>
                <div className="fag">
                    {
                        // det sorterte arrayet mappes
                        <ObligFagSemester semester={2} answer={answer}/>
                    }
                </div>
            </div>
        
        
            

            <div className="obligkort">
                <h2>Semester 3</h2>
                <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
                <div className="fag">
                    {
                        // det sorterte arrayet mappes
                        <ObligFagSemester semester={3} answer={answer}/>
                    }
                </div>
            </div>
        </div>
        

        

        

        

        <div className="videreknapp">
            {
                <CustomButton onClick={() => {visVidereClick(visVidere)}} >Videre</CustomButton>
            }
        </div>
        
        <div className="veivalg for resten av studieløpet">
        {
            
            visVidere&&
            <VelgMuligheter fagNavn ={fagNavn} masterId={masterId} answer={answer} obj={obj}></VelgMuligheter>
            

       
        }
        
        </div>
        
       
        </>
        
        
     );
};
export default ObligFagCard;