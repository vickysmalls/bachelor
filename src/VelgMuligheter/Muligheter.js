import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import Modal from "../Modal/Modal";
import InfoButton from "../CustomButton/InfoButton";
import className from "../Semester/Semester6Psyko";

const Muligheter = ({
  activeButton,
  setActiveButton,
  masterId,
  setIstrue,
  valg7Master,
  setValg7Master,
  setFag,
  setSemesterList7,
  semesterList7,
  semester,
  klassetrinn,
  sorted,
  setConditionalSem9,
}) => {
  const onSideBtnClick = (e) => {
    setActiveButton(e.id);
    //alert(e.id);
  };

  const [fagnavn, setFagnavn] = useState();
  const [URL, setURL] = useState();
  //const [semester, setSemester] = useState();
  const [emnekode, setEmneKode] = useState();
  const [studiepoeng, setStudiepoeng] = useState();
  const [klasseId, setKlasseId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <>
        {klassetrinn &&
          sorted.map((oblig) => {
            const className = activeButton === oblig.id ? "red" : "";

            return (
              //om masterFagId (fra database) er det samme som masterId (hentet fra VelgMaster)
              oblig.masterFagId === masterId &&
              oblig.semester === semester && (
                <>
                  <CustomButton
                    //setter fargen på den valgte fagveien
                    inverted={className}
                    key={oblig.id}
                    fag={oblig.fagnavn}
                    activeButton={activeButton}
                    onClick={() => {
                      onSideBtnClick(oblig);
                      setSemesterList7(oblig.id);
                      setValg7Master(oblig.masterFagId);
                      setIstrue(oblig.masterFagId);
                      setConditionalSem9(oblig.masterFagId);
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
                      setKlasseId(oblig.klasseId);
                      setURL(oblig.url);
                    }}
                  ></InfoButton>
                </>
              )
            );
          })}
      </>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h5>Info om {fagnavn}</h5>
        <br />

        <ul id="Innrykk">
          <li>Fagnavn: {fagnavn}</li>
          <li>Emnekode: {emnekode}</li>
          <li>Studiepoeng: {studiepoeng}</li>
          {semester === 10 ? null : <li>Fagside: <a href={URL} target="_blank" rel="noreferrer" > Link til fagside </a> </li> }
        </ul>
      </Modal>
    </>
  );
};

export default Muligheter;
