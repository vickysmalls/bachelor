import React, { useState, useReducer, useRef, useEffect } from "react";
import "./VelgMaster.css";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import ObligFagCard from "../oblig-fag/oblig-fag-card";
import { FaEnvelopeOpenText } from "react-icons/fa";
import InfoButton from "../CustomButton/InfoButton";
import Modal from "../Modal/Modal";
import { AiOutlineArrowDown } from "react-icons/ai";
import { handleClick } from "../Helpers";

const _ = require("lodash");

const VelgMaster = ({
  divRef,
  studieRetning,
  klasseId,
  studieId,
  fagNavnStudierettning,
}) => {
  //setter masterfag tabellen til masterFag
  const { data: masterFag, error, isPending } = useFetch(
    `http://localhost:5000/api/masterfag/`
  );

  // slik at det brukes/ lagres i neste komponent
  const [fagNavn, setFagnavn] = useState();
  const [masterId, setMasterId] = useState();
  const [visVidere, setVisVidere] = useState(false);

  //Sette farge valgt semester
  const [activeButton, setActiveButton] = useState();

  const onSideBtnClick = (e) => {
    setActiveButton(e.id);
    //alert(e.id);
  };

  //det under er for smooth scroll
  const obligDivRef = useRef();

  const handleScrollClick = () => {
    visVidere &&
      obligDivRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center",
      });
  };

  //filtrer slik at første fag man velger i 5-10, norsk engelsk eller matte, blir filtrert ut

  let filtered_klassetrinn = _.filter(masterFag, function (klasse) {
    return klasse.fagnavn !== fagNavnStudierettning;
  });

  const infoTekst_1 = (
    <div class="column" id="Atti">
      <h2 id="Left">
        Velg faget du ønsker å ha som mastegfag, og se hvordan du må bygge opp
        studiet for å kunne skrive masteroppgaven i det valgte faget
      </h2>
      <p id="Beskrivelse">
        Valget du gjør her vil påvirke valgmulighetene i resten av studiet. For
        å kunne velge et masterfag, må du ha 60 studiepoeng i faget fra syklus 1
        (de tre første studieårene). Det er dette faget du vil kunne skrive
        masteroppgave i. <br />
        <br />
        Du kan senere gå tilbake til denne delen og velge et annet masterfag du
        kunne være interessert i å skrive masteroppgave. <br />
        <br />
        <bold>Alle mulighetene er lista opp under!</bold>
      </p>
    </div>
  );

  const infoTekst_2 = (
    <div class="column" id="Atti">
      <h2 id="Left">
        Velg faget du ønsker å ha som mastegfag, og se hvordan du må bygge opp
        studiet for å kunne skrive masteroppgaven i det valgte faget
      </h2>
      <p id="Beskrivelse">
        Valget du gjør her vil påvirke valgmulighetene i resten av studiet. For
        å kunne skrive masteroppgave i et av de følgende fagene må du ha 60
        studiepoeng i faget fra syklus 1 (de tre første studieårene) <br />
        <br />
        Du kan senere gå tilbake til denne delen og velge et annet masterfag du
        kunne tenke deg, og se hvordan studiemodellen da blir. <br />
        <br />
        <bold>Alle mulighetene er lista opp under!</bold>
      </p>
    </div>
  );

  return (
    <>
      <div class="row" id="Masteremner" ref={divRef}>
        <div class="column" id="Hundre">
          <h3>Velg ønsket masterfag</h3>
        </div>
        <div class="column" id="Tjue"></div>

        {
          //Viser tekst avhengig av klasseID
          klasseId === 1 ? infoTekst_1 : infoTekst_2
        }
      </div>

      <div class="row">
        <div class="column" id="Hundre">
          <h2>Velg et masteremne: </h2>
          <div className="masterfag">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {masterFag &&
              filtered_klassetrinn.map((fag) => {
                const className = activeButton === fag.id ? "red" : "";

                return (
                  //om klasseId er det samme som answer (klassetrinn id) fra KlasseList =>
                  fag.klasseId === klasseId && (
                    <>
                      <CustomButton
                        inverted={className}
                        key={fag.id}
                        options={fag}
                        activeButton={activeButton}
                        onClick={() => {
                          handleClick(fag);
                          setMasterId(fag.id);
                          setFagnavn(fag.fagnavn);
                          setVisVidere(true);
                          onSideBtnClick(fag);
                        }}
                      >
                        {fag.fagnavn}
                      </CustomButton>
                    </>
                  )
                );
              })}
          </div>
        </div>
        <div id="Senter">
          <AiOutlineArrowDown
            size={40}
            onClick={handleScrollClick}
          ></AiOutlineArrowDown>
        </div>
      </div>

      {visVidere && (
        <ObligFagCard
          obligDivRef={obligDivRef}
          studieRetning={studieRetning}
          fagNavnStudierettning={fagNavnStudierettning}
          masterId={masterId}
          fagNavn={fagNavn}
          klasseId={klasseId}
        />
      )}
    </>
  );
};
export default VelgMaster;
