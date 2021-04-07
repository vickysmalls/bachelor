import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import InfoButton from "../CustomButton/InfoButton";
import Modal from "../Modal/Modal";
import Muligheter from "../VelgMuligheter/Muligheter";
import './Semester.css';
const _ = require("lodash");  

const Semester6Psyko = ({
  klasseId,
  semester,
  klassetrinn,
  setMuligheterId,
  activeButton,
  farge,
  setActiveButton,
  setMasterFagId,
  setSemesterList7,
  setFag,
  
  setValgtFag,
  messages,
  fag
  

}) => {

    
  //filtrer ut årstudium
  let filtered_klassetrinn = _.filter(klassetrinn, function(klasse)
    { return klasse.fagnavn !== 'Årstudium norsk, del 2' && klasse.fagnavn !== 'Årstudium matte, del 2' && klasse.fagnavn !== 'Årstudium engelsk, del 2' && klasse.fagnavn !== 'Norsk tegnspråk 2';}
)
  //
  function handleMuligheter(ele) {
    setMuligheterId(ele);
    
  }
  const onSideBtnClick = e => {
        
    setActiveButton(e.masterFagId);
   
};

  const [fagnavn, setFagnavn] = useState();
  const [emnekode, setEmneKode] = useState();
  const [studiepoeng, setStudiepoeng] = useState();

  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <>
      {klassetrinn &&
        filtered_klassetrinn.map((oblig) => {
          const className = activeButton === oblig.masterFagId ? "red" : "";
          
          return (
            //oblig.MasterFagId === masterId &&
            //om semester = 5 vis semester og semeseter fag
            oblig.semester === semester &&
            oblig.klasseId === klasseId && (
              <>
                <CustomButton
                  inverted={className}
                  key={oblig.id}
                  semester={oblig.semester}
                  klasseId={oblig.klasseId}
                  onClick={() => {
                    handleMuligheter(oblig.id);
                    onSideBtnClick(oblig);
                    setMasterFagId(oblig.masterFagId)
                    
                   

                  }}
                >
                  {oblig.fagnavn}
                </CustomButton>

                <InfoButton
                  onClick={() => {
                    setIsOpen(true);
                    setFagnavn(oblig.fagnavn);
                    //setSemester(oblig.semester)
                    setEmneKode(oblig.emnekode);
                    setStudiepoeng(oblig.studiepoeng);
                    //setKlasseId(oblig.klasseId)
                  }}
                ></InfoButton>
              </>
            )
          );
        })}

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h5>Info om {fagnavn}</h5>
        <br />

        <ul id="Innrykk">
          <li>Fagnavn: {fagnavn}</li>
          <li>Emnekode: {emnekode}</li>
          <li>Studiepoeng: {studiepoeng}</li>
        </ul>
      </Modal>
    </>
  );
};

export default Semester6Psyko;
