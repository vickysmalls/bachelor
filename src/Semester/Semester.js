import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import InfoButton from "../CustomButton/InfoButton";
import Modal from "../Modal/Modal";
import './Semester.css';
const _ = require("lodash");


const Semester = ({
  klasseId,
  semester,
  klassetrinn,
  setMuligheterId,
  activeButton,
  setForceRender,
  setActiveButton,
  masterId,
  setFag,
  error,
  isPending

}) => {

    
  //
   //filtrer ut årstudium og tegnspråk
   let filtered_klassetrinn = _.filter(klassetrinn, function (klasse) {
    return (
      klasse.fagnavn !== "Årstudium norsk, del 1" &&
      klasse.fagnavn !== "Årstudium matte, del 1" &&
      klasse.fagnavn !== "Årstudium engelsk, del 1" &&
      klasse.fagnavn !== "Norsk tegnspråk 1" 
    );
  });
  
  //
  /* function handleMuligheter(ele) {
    setMuligheterId(ele);    
  } */
  const onSideBtnClick = e => {
    setActiveButton(e.id);
    //setMuligheterId(e.id)
    //setActiveButton(e.masterFagId);
   
};

  const [fagnavn, setFagnavn] = useState();
  const [URL, setURL] = useState();
  const [emnekode, setEmneKode] = useState();
  const [studiepoeng, setStudiepoeng] = useState();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {
      isPending && <div>Loading...</div>
    }
    {
      error && <div>{error}</div>
    }

      {klassetrinn &&
        filtered_klassetrinn.map((klasse) => {
          const className = activeButton === klasse.id ? "red" : "";
          
          return (
            //oblig.MasterFagId === masterId &&
            //om semester = 5 vis semester og semeseter fag
            klasse.semester === semester &&
            klasse.klasseId === klasseId &&
            //den under er ny, filtrer vekk slik at om du velger engelsk som masterfag, vil den ikke vises her
             (
              <>
                <CustomButton
                  inverted={className}
                  key={klasse.id}
                  semester={klasse.semester}
                  klasseId={klasse.klasseId}
                  onClick={() => {
                    setMuligheterId(klasse.masterFagId);
                    onSideBtnClick(klasse);
                    setForceRender(false);
                   
                  }}
                >
                  {klasse.fagnavn}
                </CustomButton>

                <InfoButton
                  onClick={() => {
                    setIsOpen(true);
                    setFagnavn(klasse.fagnavn);
                    //setSemester(oblig.semester)
                    setEmneKode(klasse.emnekode);
                    setStudiepoeng(klasse.studiepoeng);
                    //setKlasseId(oblig.klasseId)
                    setURL(klasse.url);
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
          <li>Fagside: <a href={URL} target="_blank" rel="noreferrer" > Link til fagside </a></li>
        </ul>
      </Modal>
    </>
  );
};

export default Semester;
