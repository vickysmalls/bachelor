import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';
import ObligFagSemester from './oblig-fag-semester';
import './oblig-fag.css';
import Elever from './Elever.jpeg';

const ObligFagCard = ({answer, masterId, obj, fagNavn}) => {

    
    
    const [visVidere, setVisVidere] = useState(false);
    
    function visVidereClick(visVidere){
        console.log('vis videre klikket');
        console.log(visVidere);
        
        setVisVidere(true)
    }
 
    return (  
        <>
<div class="row">
    <div class="column" id="Hundre">
    <h3>3. Obligatoriske emner</h3>
    </div>
    <div class="column" id="Tjue">
    </div>

    <div class="column" id="Atti">
        <h2 id="Left">Oversikt over de obligatoriske emnene i de tre første semestrene</h2>
        <p id="Beskrivelse">De tre første semesterene består kun av obligatoriske emner. Disse er felles for begge studieretninger og 
            påvirker ikke masteroppgaven. I løpet av de tre første semestrene vil alle gjennomføre eksamner i Norsk og Matematikk, 
            samt få innføring i pedagogikk. <br /><br />
            <bold>De obligatoriske emnene er listet opp under!</bold>
        </p>
    </div>  
</div>


    <div class="row">
    <div class="column" id="Hundre">
        <div className="obligatoriske semestre">
            <div classname="Seksti">
                <h5>Semester 1</h5> 
                <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
                <div className="fag">
                    {
                        // det sorterte arrayet mappes
                        <ObligFagSemester id="IkkeKnapp" semester={1} answer={answer}/>
                    }
                </div>
            </div>
            
                

       
            <div className="Forti">
                <h5>Semester 2</h5>
                <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>
                <div className="fag">
                    {
                        // det sorterte arrayet mappes
                        <ObligFagSemester semester={2} answer={answer}/>
                    }
                </div>
            </div>
    
        
        
            

            <div className="obligkort">
                <h5>Semester 3</h5>
                <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
                <div className="fag">
                    {
                        // det sorterte arrayet mappes
                        <ObligFagSemester semester={3} answer={answer}/>
                    }
                </div>
            </div>
        </div>
    </div>
    </div>
        

    <div class="row">
    <div class="column" id="Hundre">    
        <div className="videreknapp" id="Videre">
            {
                <CustomButton id="Videre" onClick={() => {visVidereClick(visVidere)}} >Videre</CustomButton>
            }
        </div>
        

        

        

        
        
        <div className="veivalg for resten av studieløpet">
        {
            
           
            <VelgMuligheter fagNavn ={fagNavn} masterId={masterId} answer={answer} obj={obj}></VelgMuligheter>
            

       
        }
        
        </div>
        </div>
        </div>
        
       
        </>
        
        
     );
};
export default ObligFagCard;