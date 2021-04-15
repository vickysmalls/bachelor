import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import InfoButton from "../CustomButton/InfoButton";
import Modal from "../Modal/Modal";
import Muligheter from "../VelgMuligheter/Muligheter";
import './Semester.css';

const Semester = ({
  klasseId,
  semester,
  klassetrinn,
  setMuligheterId,
  activeButton,

  setActiveButton,

  setFag,

}) => {

    
  //

  
  //
  function handleMuligheter(ele) {
    setMuligheterId(ele);    
  }
  const onSideBtnClick = e => {
    setActiveButton(e.id);
    //setActiveButton(e.masterFagId);
   
};

  const [fagnavn, setFagnavn] = useState();
  const [URL, setURL] = useState();
  const [emnekode, setEmneKode] = useState();
  const [studiepoeng, setStudiepoeng] = useState();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {klassetrinn &&
        klassetrinn.map((oblig) => {
          const className = activeButton === oblig.id ? "red" : "";
          
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
                    setURL(oblig.url);
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
