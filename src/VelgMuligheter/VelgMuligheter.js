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
import styled from 'styled-components';

import './muligheter.css';
import Resultat from './Resultat';
import Semester6Psyko from '../Semester/Semester6Psyko';
import InfoButton from '../CustomButton/InfoButton';
import TvungenMulighet from './TvungenMulighet';
import TvungenMulighet2 from './TvungenMulighet';
import ObligFagSemester2 from '../oblig-fag/ObligFagSemester2';
import ValideringAlert from '../Validering/ValideringAlert';


const _ = require("lodash");  



const VelgMuligheter = ({fagNavnStudierettning, studieRetning, masterId, klasseId, fagNavn}) => {

    //database fetch
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);

    const [isOpen, setIsOpen] = useState(true);

    

    //for å filtrere muligheter i Semester, når man ser hva man har valgt
    const [muligheterId1, setMuligheterId1] = useState();
    const [muligheterId2, setMuligheterId2] = useState();
    const [muligheterId3, setMuligheterId3] = useState();

    const [mulighetTull, setMulighetTull] = useState();
    const [mulighetTull2, setMulighetTull2] = useState();

    const [valg7Master ,setValg7Master] = useState();

    const [semester9Master, setSemester9Master] = useState();
    
    const [masterFagId, setMasterFagId] = useState();

    const [valgtFag4, setValgtFag4] = useState();
   
    const [empty, setEmpty] = useState();

    const [isTrue, setIstrue] = useState();

    const [randomVar, setRandom] = useState();

    const [tom, setTom] = useState();

    const [sem9Id, setSem9Id] = useState();



    //resetter sem6 state
    const [forceRender, setForceRender] = useState(false);
    
    


    const [semester9Resultat, setSemester9Resultat] = useState();

    const [conditionalSem9, setConditionalSem9] = useState();


    

    const [activeButton, setActiveButton] = useState();

    const handleReset =()=>{
       /*  setMulighetTull("");
        setActiveButton('');
        setMuligheterId1(''); */
        muligheterId3('');
      }

    
    // automatisk setting av valg når det eksisterer en tvungen mulighet
    const [activeButtonTvungen, setActiveButtonTvungen] = useState();
    const [activeButtonTvungen2, setActiveButtonTvungen2] = useState();
    const [activeButtonTvungen3, setActiveButtonTvungen3] = useState();


    // farge for for semester 4
    const [activeButton4, setActiveButton4] = useState();

    // farge for for semester 6
    const [activeButton2, setActiveButton2] = useState();
    // farge for for semester 7
    const [activeButton7, setActiveButton7] = useState();
    // farge for for semester 8
    const [activeButton8, setActiveButton8] = useState();
    // farge for for semester 9
    const [activeButton9, setActiveButton9] = useState();
    // farge for for semester 10
    const [activeButton10, setActiveButton10] = useState();


    // farge for for semester 5
    const [activeButton5, setActiveButton5] = useState();
    //Set semester 7 liste
    const [semesterList7, setSemesterList7] = useState();

    const [videre, setVidere] = useState(false);

    const [begynnerLaring, setBegynnerLaring] = useState(3);

    const [begynnerLaringBoolean, setBegynnerLaringBoolean] = useState(false);

    //console.log('activeButton2', activeButton2);

    //lager et array som sortrer etter semester
    const iteratees = obj => obj.semester;
    const sorted = _.sortBy(klassetrinn, iteratees);

   /*  //console.log('valg7Master', valg7Master)
    console.log('masterId', masterId)
    //console.log('semester9Resultat', semester9Resultat);
    console.log('muligheterId1; ',muligheterId1);
    console.log('muligheterId2; ',muligheterId2);
    console.log('muligheterId3; ',muligheterId3);
 */

 const infoTekst_2_studie_aar_1 = (
   <div>
     <h2 id="Studieaar">Obligatorisk emner på høsten og fordypning på våren</h2>
     <p id="AarBeskrivelse">
       3. semester består av de obligatoriske fagene mattematikk, norsk og
       pedagogikk. Men valget man gjør 4. semester vil være svært viktig for
       resten av studiet, og hvilke emner du som student har mulighet til skrive
       masteroppgave innenfor.
       <br />
       <br />
       Denne veilederen viser deg valgmulighetene utifra ønsket mastermne som er
       valgt ovenfor. Noen studenter vil ha mange valgmuligheter i dette
       semsteret, mens for enkelte mastermner vil det være nødvendig å velge
       riktig fordypning.
     </p>
   </div>
 );
 const infoTekst_2_studie_aar_2 = (
   <div>
     <h2 id="Studieaar">
       Obligatoriske emner på høsten og valgfrie emner på våren
     </h2>
     <p id="AarBeskrivelse">
       3. semester består av ytterligere 15 studiepoeng i ditt valgte
       undervisningsfag; norsk, matematikk eller engelsk, samt 15 studiepoeng i
       pedagogikk og elevkunnskap. I 4. semester velger du et nytt
       undervisningsfag. Hvis du ønsker et av disse fagene som masterfag, må du
       velge det i dette semesteret og bygge videre på det i 5. semester for å
       få de 60 studiepoengene du trenger for å kunne skrive masteroppgave i
       faget.
     </p>
   </div>
 );

 const infoTekst_3_studie_aar_1 = (
   <div>
     <h2 id="Studieaar">
       Mulighet for studier i utlandet og fordypning i valgfrie emner
     </h2>
     <p id="AarBeskrivelse">
       Det tredje året på studiet er preget av at du kan velge fordypning i
       ønsket emne. Dette er også tidpunktet hvor det er mulighet for å studere
       fremmedspråk i utlandet. OsloMet tilbyr utveksling på en rekke
       universiteter i utlandet. Dersom du er interessert i dette oppfordrer vi
       til å lese mer på OsloMet sine utvekslingssider. Godkjente
       utvekslingsopphold er fra 3 måneder til ett år og vil inngå som en
       forhåndsgodkjent del av utdanningen din.
       <br />
       <a
         class="button"
         href="https://student.oslomet.no/utveksling-femarig-grunnskolelererutdanning"
         target="_blank"
         id="Utveksling"
       >
         Les mer om utveksling{" "}
       </a>
       <br />
       For begge studieretninger har studentene mulighet til å fordype seg i ett
       eller flere valgfrie emner. Valgmulighetene er listet opp under.
     </p>
   </div>
 );
 const infoTekst_3_studie_aar_2 = (
   <div>
     <h2 id="Studieaar">
       Mulighet for studier i utlandet og fordypning i valgfrie emner
     </h2>
     <p id="AarBeskrivelse">
       I det tredje studieår, 5. semester kan du velge fordypning i faget fra 4.
       semester. Eventuelt kan du velge det faget du ikke har hatt i første og
       andre studieår av norsk, matematikk eller engelsk. Et tredje alternativ
       er å studere fremmedspråk i utlandet; tysk, fransk eller spansk. I
       6.semester tilbyr OsloMet utveksling til en rekke universiteter i
       utlandet. Dersom du er interessert i dette oppfordrer vi til å lese mer
       på OsloMet sine utvekslingssider. Godkjente utvekslingsopphold er fra 3
       måneder til ett år og vil inngå som en forhåndsgodkjent del av
       utdanningen din.
       <br />
       <a
         class="button"
         href="https://student.oslomet.no/utveksling-femarig-grunnskolelererutdanning"
         target="_blank"
         id="Utveksling"
       >
         Les mer om utveksling{" "}
       </a>
       <br />
       Valgmulighetene er listet opp under.
     </p>
   </div>
 );
 
  
 

    

    return ( 
        
        
        <>

    <div class="row">
    <div class="column" id="Hundre">
    <h3>2. Studieår</h3>

       {//viser ulik tekst avhengig av klasseID valgt
            klasseId===1 ? infoTekst_2_studie_aar_1 : infoTekst_2_studie_aar_2

       }

        <div className="obligatoriske semestre">
            <div classname="Seksti">
            <h5>Semester 3</h5>
            <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
            <div className="fag">
            { //sjekker om det er 5-10, hvis det er det vil den filtrer i ObligFagSemester2
                klasseId ===2  ?(
                    <ObligFagSemester2 fagNavnStudierettning={fagNavnStudierettning} semester={3} answer={klasseId}/>
                ) :(

                    // det sorterte arrayet mappes
                    <ObligFagSemester id="Gul" semester={3} answer={klasseId}/>
                )
        }
           
            
        
        </div>
        </div>

            <div className="Forti">

            <h5>Semester 4</h5>
        <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p> 
        <div className='fag'>
        
        {
            <TvungenMulighet error={error} isPending={isPending} activeButtonTvungen={activeButtonTvungen} setActiveButtonTvungen={setActiveButtonTvungen} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull2} fagNavn={fagNavn}  klassetrinn={klassetrinn} sorted={sorted} semester={4} masterId={masterId}>{fagNavn}</TvungenMulighet>

        }

        {
            //Hvis valgt masterId er 1,2,10,11,12: hvis alle fag for semesteret
            //fagNavn.includes('Profesjonsrettet pedagogikk')
            //bruker samme active button som sem5, må sjekkes ut
            //husk begynner vises her også, vet ikke om riktig enda
            (
                masterId ===1  || masterId ===2  || 
                masterId ===3  ||
                masterId ===11 ||masterId ===12 || masterId ===13 || masterId ===14 || masterId ===15 || 
                masterId ===16 || masterId ===17 || masterId ===24 || masterId ===25 || 
                masterId ===26 || masterId ===27 
            ) 
        ? 
            (
                <Semester 
                error={error} isPending={isPending}
                    setMuligheterId={setMuligheterId1} 
                    muligheterId={muligheterId1}
                    setValgtFag={setValgtFag4} 
                    valgtFag={valgtFag4} 
                    klassetrinn={klassetrinn} 
                    semester={4} 
                    klasseId ={klasseId}
                    activeButton={activeButton}
                    setActiveButton ={setActiveButton}
                    setForceRender = {setTom}

                    
                />
            ) 
        : 
            null
        }
    </div>  

            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="column" id="Hundre">
    <h3>3. Studieår</h3>

    { //infotekst avhengig av valgt klasseID
        klasseId===1 ? infoTekst_3_studie_aar_1 : infoTekst_3_studie_aar_2
    }

        <div className="obligatoriske semestre">
            <div classname="Seksti">
            <h5>Semester 5</h5>
            <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p> 

            
            <div className='fag'>
        {
            //hvis den ikke er begynnerlæring så må denne vises
            masterId!==3&&
            <TvungenMulighet error={error} isPending={isPending}  activeButtonTvungen={activeButtonTvungen2} setActiveButtonTvungen={setActiveButtonTvungen2} activeButton={activeButton} setActiveButton ={setActiveButton} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull2} semesterList7={mulighetTull} klassetrinn={klassetrinn} sorted={sorted} semester={5} masterId={masterId}/>
        } 
        {
            //hvis den er begynnerlæring så må denne vises
            masterId===3&&
            <Muligheter error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton4} setActiveButton ={setActiveButton4} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull2} klassetrinn={klassetrinn} sorted={sorted} semester={5} masterId={masterId}/>
        } 

        {
            //hvis den er noen av pedagogikkfagene, vis Semester
            (
                masterId ===12 || masterId ===13 ||
                masterId ===14 || masterId ===25 || 
                masterId ===26 || masterId ===27
            ) 
        ? 
            
               
                //Viser nå når man velger fag i 4 semester, baserer seg på muligheterId1
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton4} setActiveButton ={setActiveButton4} setIstrue={setRandom} setValg7Master={setMuligheterId2} setSemesterList7={setMulighetTull2} klassetrinn={klassetrinn} sorted={sorted} semester={5} masterId={muligheterId1}/>

                
            
        : 
         null
        }

        {
            //mat og helse
           muligheterId1===29 &&
           
            <Semester 
            error={error} 
            isPending={isPending}
            activeButton={activeButton} 
            setActiveButton ={setActiveButton}  
            setMuligheterId={setMuligheterId2} 
            muligheterId={muligheterId2} 
            klassetrinn={klassetrinn} 
            semester={5} 
            klasseId ={klasseId}
            setForceRender = {setTom}
        />
           
        }
            </div>
        </div>
        
        <div className="Forti">
        <h5>Semester 6</h5>
        <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p> 
        <div className='fag'>
        {
            //hvis den ikke er begynner så må denne vises, BEGYNNER ER IKKE 12? SKJØNNER IKKE DENNE!!
            masterId ===11 || masterId ===12 || 
            masterId ===13 ||masterId ===14  ||
            masterId ===24 || masterId ===25 || 
            masterId ===26 || masterId ===27  ?
            (

                <TvungenMulighet  error={error} isPending={isPending}  activeButtonTvungen={setActiveButton2} setActiveButtonTvungen={setActiveButton2} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull2} fagNavn={fagNavn}  klassetrinn={klassetrinn} sorted={sorted} semester={6} masterId={masterId}/>

            ): 
            //masterId!==12?
            (

                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull2} activeButton={activeButton2} setActiveButton ={setActiveButton2} klassetrinn={klassetrinn} sorted={sorted} semester={6} masterId={masterId}/>
            )
               

        } 

       

       

        {(
            //masterId ===1  || masterId ===2  || masterId ===3  ||  || masterId ===5  ||
            masterId ===1  || masterId ===2  ||  masterId ===3 || masterId ===4 || fagNavn.includes('RLE')  ||fagNavn.includes('Kroppsøving')|| 
            //masterId ===6  || masterId ===7  || masterId ===8  || masterId ===9  || masterId ===10 || 
            fagNavn.includes('Kunst og håndverk')  || fagNavn.includes('Musikk')  ||fagNavn.includes('Naturfag')|| fagNavn.includes('Samfunnsfag')  || 

            fagNavn.includes('Pedagogikk') || masterId === 18 ||
            masterId ===19 || masterId ===20 || masterId ===21 || masterId ===22 || masterId ===23 
         ) 
         ? 
         (//semester6psyko vise pedagogikk
             <>
             
            <Semester6Psyko error={error} isPending={isPending} setForceRender = {setForceRender} forceRender={forceRender} masterId={masterId} setMasterFagId={setMasterFagId} activeButton={activeButton2} setActiveButton ={setActiveButton2} setMuligheterId={setMuligheterId3} muligheterId={muligheterId3} klassetrinn={klassetrinn} semester={6} klasseId ={klasseId}/>
           
                <Semester 
                error={error} 
                isPending={isPending}
                setMuligheterId={setMuligheterId3} 
                muligheterId={muligheterId3}
                klassetrinn={klassetrinn} 
                semester={4} 
                klasseId ={klasseId}
                activeButton={activeButton2}
                setActiveButton ={setActiveButton2}
                setForceRender = {setForceRender}
                
                
                
            />
            </>
        ) 
        : null
        }
    
    </div>  
        </div>
        {console.log('semesterList7', semesterList7)}



        
        </div>
    </div>
</div>

<div class="row">
    <div class="column" id="Hundre">
    <h3>4. Studieår</h3>

    <h2 id="Studieaar">Forberedelser til masteroppgaven</h2>
    <p id="AarBeskrivelse">
        Emnene i dette studieåret er som regel avgjørende for hvilke muligheter du har til masteroppgaven.

    </p>

        <div className="obligatoriske semestre">
            <div classname="Seksti">
        
        <h5>Semester 7</h5>
        <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p> 
        <div className='fag'>
        
        {
            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setRandom} activeButton={activeButton7} setActiveButton ={setActiveButton7} setIstrue={setIstrue} valg7Master={valg7Master} setValg7Master={setValg7Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={masterId}/>
            
        } 

        { klasseId === 2 &&
            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setRandom} activeButton={activeButton7} setActiveButton ={setActiveButton7} setIstrue={setIstrue} valg7Master={valg7Master} setValg7Master={setValg7Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={studieRetning}/>
            
        } 
      

        {
            <Semester error={error} isPending={isPending} setForceRender = {setTom} activeButton={activeButton7} setActiveButton ={setActiveButton7} setSemesterList7={setSemesterList7}   klassetrinn={klassetrinn} semester={7} klasseId ={klasseId}/>
        
        }
        {
            <ObligFagSemester setSemesterList7={setSemesterList7}   semester={7} answer={klasseId}/>
        }
        {
            (
            //klassetrinn = 2, valgt  masterFag Norsk Engelsk Matte
            klasseId===2 || masterId === 12 || masterId === 13 || masterId === 14
            //siste endring: byttet masterId fra activeButton til muligheterId2
            ) 
        ? 
            (
                
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setRandom} activeButton={activeButton7} setActiveButton ={setActiveButton7} setIstrue={setRandom} valg7Master={valg7Master} setValg7Master={setValg7Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={muligheterId2}/>
            ) 
            
        :  
            
        null
            
        }
        {
            //begynner oplæring for norsk Engelsk Matte
            masterId === 1 ||
            masterId === 2 ||
            masterId === 4 ?
            (
                //setValg7Master
                //setTom
                //setTom isteden gjør at den ikke kommer i semester 8, og fucker opp semester 10
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setRandom} activeButton={activeButton7} setActiveButton ={setActiveButton7} setIstrue={setIstrue} valg7Master={valg7Master} setValg7Master={setValg7Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={begynnerLaring}/>
            ) : null
        }
        
        </div>
    </div>

    <div className="Forti">
        <h5>Semester 8</h5>
        <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p> 
        <div className='fag'>
        
        {
            //<Muligheter setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={masterId}/>
        } 

        {masterId === 1 && (
            <Semester  error={error} isPending={isPending} setForceRender = {setTom} activeButton={activeButton8} setActiveButton ={setActiveButton8} setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} semester={8} klasseId ={klasseId}/>
        )
        }
        {
            
            <ObligFagSemester setSemesterList7={setSemesterList7} semester={8} answer={klasseId}/>

        }
        {
            //Nå vises ikke fagene for semeseter 8-9, tror id feil, kommer om man uncommenter mulighet øverst
            (
            //om klasseId klassetrinn 5-10) og pedagogikk 1-7
            klasseId===2 //|| masterId === 12 || masterId === 13 || masterId === 14

            /*
              kommentert ut var tidligeere, beholder i tilfelle ny løsmninng er bug
            masterId === 12 || masterId === 13 || masterId === 14 || masterId === 15 || masterId === 16 || masterId === 17 || masterId === 18 || masterId === 19 || masterId === 20 || masterId === 21 || masterId === 22 || masterId === 23 || masterId === 24 || masterId === 25 || masterId === 26 || masterId === 27*/
             
            ) 
        ? 
            (
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton8} setActiveButton ={setActiveButton8} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={valg7Master}/>
                ) 
        : 
               null

        }

        {
            //DEENNE ER FOR NORSK ENG MATTE 1-7, for begynner opplæring
            //om semster er 1, og fag er norsk matte eller engelsk vis begynneropplæring
            (
                klasseId===1 || masterId === 1 || masterId === 2 || masterId === 4
 
            ) 
        ? 
            (
                //denne
                //masterId egentlig velg7master
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton8} setActiveButton ={setActiveButton8} setIstrue={setRandom} setValg7Master={setEmpty} setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={valg7Master}/>
            )
            //om muligheter over er true 
        : empty &&klasseId===1 ?(

            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton8} setActiveButton ={setActiveButton8} setIstrue={setRandom} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={masterId}/>
        ) : null

        }
        
        </div>
        </div>
    </div>
    </div>
    </div>

    <div class="row">
    <div class="column" id="Hundre">
    <h3>5. Studieår</h3>

    <h2 id="Studieaar"> Undervisningsfag og masteroppgaven</h2>
      <p id="AarBeskrivelse">
        I 9. semester er pedagogikk og elevkunnskap obligatorisk. Det siste
        semesteret går utelukkende til arbeid med masteroppgaven.
       
      </p>
        <div className="obligatoriske semestre">
            <div classname="Seksti">

        <h5>Semester 9</h5>
        <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p> 
        <div className='fag'>
        
        {
            muligheterId3 &&
            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setRandom} setValg7Master={setSemester9Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={masterFagId}/>
        } 
        {//hvis man velger pedagogikk
            //evt masterId === pedagogikk ider
            //muligheterId2 &&
            masterId === 12 ||masterId === 13 || masterId === 14 ||
            masterId === 25 ||masterId === 26 || masterId === 27 ?(

                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setRandom} setValg7Master={setSemester9Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={masterId}/>
            ): null
        } 

        {masterId ===1 && (
            <Semester  error={error} isPending={isPending} setForceRender = {setTom} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setRandom} setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} semester={9} klasseId ={klasseId}/>
        )
        }
        {
            <ObligFagSemester setSemesterList7={setSemesterList7} semester={9} answer={klasseId}/>
        }
        {
            //om det er semeseter 2
            (
            /*
              kommentert ut var tidligeere, beholder i tilfelle ny løsmninng er bug
            masterId === 12 || masterId === 13 || masterId === 14 || masterId === 15 || masterId === 16 || masterId === 17 || masterId === 18 || masterId === 19 || masterId === 20 || masterId === 21 || masterId === 22 || masterId === 23 || masterId === 24 || masterId === 25 || masterId === 26 || masterId === 27*/
             //om klasseId (klassetrinn 1-7, eller klassetrinn 5-10) og pedagogikk 1-7
             klasseId===2 
            ) 
        ? 
            (
                
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setRandom} setValg7Master={setSemester9Master} setSemesterList7={setSemester9Resultat} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={valg7Master}/>
            ) 
        : 
        null
                //<Muligheter setValg7Master={setSemester9Master} setSemesterList7={setSemester9Resultat}  klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={masterId}/>

    
        }

        

        {
            //for begynner opplæring
            //om semster er 1, og begynneropplæring blir valgt i 7, vis valget
            (
            //klasseId === 1 && valg7Master === 3 
            klasseId === 1 && valg7Master === 3 

 
            ) 
        ? 
            (
                //denne gjelder begynner
                //setRandom
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setRandom} setValg7Master={setSemester9Master} setSemesterList7={setSemester9Resultat} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={valg7Master}/>
                

                ) 
                //om man velger norsk didaktikk
        :  klasseId === 1 && isTrue === 1 ?(
            //hvis semester er 1, men begynneropplæring ikke blir valgt i 7, vis valget pluss begynner
            <>
            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setRandom} setValg7Master={setSemester9Master} setSemesterList7={setSemester9Resultat} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={valg7Master}/>

            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setSem9Id} setValg7Master={setTom} setSemesterList7={setTom} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={begynnerLaring}/>

            </>
            
        )
        //velger man begynner vil verdiene settes, den andre if setningen er vanlige fag 
        : klasseId === 1 &&  isTrue === 3 ?(
            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setRandom} setValg7Master={setSemester9Master} setSemesterList7={setSemester9Resultat} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={begynnerLaring}/>

        )   
        : klasseId === 1 ?(

            <>
            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setTom} setValg7Master={setTom} setSemesterList7={setTom} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={begynnerLaring}/>
            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton9} setActiveButton ={setActiveButton9} setIstrue={setRandom} setValg7Master={setSemester9Master} setSemesterList7={setSemester9Resultat} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={valg7Master}/>
    
            </>
        ):null
        }

        
        

        
        </div>
    </div>
        

    <div className="Forti">
        <h5>Semester 10</h5>
        <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p> 
        <div className='fag'>
        {//masterFag id
            console.log('isTrue', isTrue)}

        
        
        { 
            
           //isTrue =3 BETYR at man har valgt begynner i sem 7
            //activeButton9 = 14 er begynner i sem 9
            isTrue !==3 && activeButton9 ===14 ?  <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton10} setActiveButton ={setActiveButton10} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={masterId}/>
            :
            
            masterFagId &&klasseId ===1  ? 
            //må sette empty i sem 7
            //isTrue ===3  ? 

            (
                
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton10} setActiveButton ={setActiveButton10} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={semester9Master}/>
                

                
            ) :
            muligheterId2&& klasseId ===1  ?
            (
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton10} setActiveButton ={setActiveButton10} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={semester9Master}/>

            )
            : klasseId ===1 ?(
            <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton10} setActiveButton ={setActiveButton10} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={valg7Master}/>
            
            ): null//for å fjerne stygge grønt rundt

            //prøv: sjekk om begynner er gyldig i semester 8, er den det gi mulighet for begynner
            
        } 
        {
            console.log('sem9Id', sem9Id)
        }

        {
           // activeButton9 ===4 && 
        }

      {/* 
          isTrue ===1 && activeButton9 ===14 ?
          <Muligheter setConditionalSem9={setConditionalSem9} activeButton={activeButton10} setActiveButton ={setActiveButton10} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={masterId}/>
            :
            null
       */}

        {/* 
        //funker på vanlige fag( ikke norsk, da dobles de)
        //funker også om man velger pedagogikk i n
         randomVar !== masterId ? (
            <Muligheter setIstrue={setRandom} setValg7Master setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={valg7Master}/>
         )   : null
         */}
        {
            //om randomVar, som basicly er id, ikke er lik valg7master, som også er id, skal denne vises
            //glitcher når man velger spes, så norsk, da forsvinner norsk
           
             randomVar !== valg7Master  ? 
             (
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton10} setActiveButton ={setActiveButton10} setIstrue={setTom} setValg7Master={setTom} setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={valg7Master}/>
             )   
             : null
    
    
            }
        {
            //hvis 
            //klasseId ===2 && masterFagId gjør at den automatisk kommer i semster 10, men vises ikke auto i 9
            klasseId ===2
            ? (
                
                <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton10} setActiveButton ={setActiveButton10} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={semester9Master}/>

               //<Muligheter setValg7Master setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={semester9Master}/>

           ) : klasseId ===2 && masterFagId   ?
           (
               //masterId settes ikke i 9
               //<Muligheter setValg7Master setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={semester9Master}/>

               <Muligheter  error={error} isPending={isPending} setConditionalSem9={setConditionalSem9} activeButton={activeButton10} setActiveButton ={setActiveButton10} setIstrue={setRandom} setValg7Master={setTom} setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={masterId}/>

           ) : null
       }
        

        
        
        
        </div>
        </div>
        </div>
    </div>
    </div>

    <div class="row" id="Masteremner">
    <div class="column" id="Hundre">
    <h3>Oppsummering av studieløp</h3>
    </div>
    <div class="column" id="Tjue">
    </div>

    <div class="column" id="Atti">
        <h2 id="Left">Under ser du hvordan studieløpet ditt vil bli og valgt masteremne</h2>
        <p id="Beskrivelse">Her kan du se en oppsumering av studieløpet ditt. Nederst finner du en mulighet til å lagre og 
            printe ut oppsummeringen slik at du kan ta vare på denne.
        </p>

        {
            // Tilbakemelding til bruker dersom den mangler valg
            (activeButtonTvungen  && activeButton && activeButton2 && activeButton7 && activeButton8 && activeButton9 && activeButton10)
            ||
            (activeButtonTvungen2 && activeButton && activeButton2 && activeButton7 && activeButton8 && activeButton9 && activeButton10)
            ||
            (activeButtonTvungen && activeButtonTvungen2 && activeButton2 && activeButton7 && activeButton8 && activeButton9 && activeButton10)
            || 
            (activeButton && activeButton2 && activeButton7 && activeButton8 && activeButton9 && activeButton10)
            
            ?
            null
            :
            <ValideringAlert/>

        }

        {
            // Validering som gir tilgang til side for oppsummering
            (activeButtonTvungen  && activeButton && activeButton2 && activeButton7 && activeButton8 && activeButton9 && activeButton10)
            ||
            (activeButtonTvungen2 && activeButton && activeButton2 && activeButton7 && activeButton8 && activeButton9 && activeButton10)
            ||
            (activeButtonTvungen && activeButtonTvungen2 && activeButton2 && activeButton7 && activeButton8 && activeButton9 && activeButton10)
            || 
            (activeButton && activeButton2 && activeButton7 && activeButton8 && activeButton9 && activeButton10)
            
            ?
            <CustomButton onClick={() => setVidere(true)}  id="Oppsummering">Se oppsummering</CustomButton>
            :
            <CustomButton onClick={() => setVidere(false)} id="Oppsummering">Se oppsummering</CustomButton>
          
        }

    </div>  
</div>

        { //Viser hele studieløpet om man trykker på videreknappen
        videre &&
       
        <Resultat 
            answer={klasseId} 
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
            valg7Master={valg7Master}
            klasseId={klasseId}
            semester9Resultat={semester9Resultat}
            activeButton10={activeButton10}
            activeButton9={activeButton9}
            activeButton2={activeButton2}
            activeButton4={activeButton4}
            



        />
            
       
        }

    </>
        
     );
     
};

export default VelgMuligheter;