import React, { useRef, useState } from "react";

import VelgMuligheter from "../VelgMuligheter/VelgMuligheter";
import ObligFagSemester from "./oblig-fag-semester";
import "./oblig-fag.css";
import ObligFagSemester2 from "./ObligFagSemester2";

const ObligFagCard = ({
  obligDivRef,
  studieRetning,
  klasseId,
  masterId,
  obj,
  fagNavn,
  fagNavnStudierettning,
}) => {
  //det under er for smooth scroll
  const velgMuligheterDivRef = useRef();

  const handleScrollClick = () => {
    velgMuligheterDivRef.current.scrollIntoView({ behavior: "smooth" });
  };

  
  const infoTekst_1_de_tre_forste = (
    <div class="column" id="Atti">
      <h2 id="Left">De tre første semestrene består av obligatoriske emner</h2>
      <p id="Beskrivelse">
        De tre første semestrene består kun av obligatoriske emner i fagene
        norsk, matematikk og pedagogikk og elevkunnskap. <br />
        <br />
        <bold>De obligatoriske emnene er markert i gult!</bold>
      </p>
    </div>
  );

  const infoTekst_2_de_tre_forste = (
    <div class="column" id="Atti">
      <h2 id="Left">De tre første semestrene består obligatoriske emner</h2>
      <p id="Beskrivelse">
        De tre første semestrene består av obligatoriske emner. 60 studiepoeng i
        ditt første undervisningsfag som er enten norsk, matematikk eller
        enelsk, samt 30 studiepoeng i pedagogikk og elevkunnskap. <br />
        <br />
        <bold>De obligatoriske emnene er markert i gult!</bold>
      </p>
    </div>
  );

  return (
    <>
      <div class="row" ref={obligDivRef}>
        <div class="column" id="Hundre">
          <h3>1. Studieår: Obligatoriske emner</h3>
        </div>
        <div class="column" id="MasterBilde"></div>

        {
            //Om valgt klasse trinn er 1-7, ellers vis den andre
            klasseId===1 ? infoTekst_1_de_tre_forste : infoTekst_2_de_tre_forste
        }
      </div>

      <div class="row">
        <div class="column" id="Hundre">
          <div className="obligatoriske semestre">
            <div classname="Seksti">
              <h5>Semester 1</h5>
              <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
              <div className="fag">
                {
                  //sjekker om det er 5-10, hvis det er det vil den filtrer i ObligFagSemester2, med fagnavnet satt i VelgStudieRettning
                  klasseId === 2 ? (
                    <ObligFagSemester2
                      fagNavnStudierettning={fagNavnStudierettning}
                      semester={1}
                      answer={klasseId}
                    />
                  ) : (
                    // det sorterte arrayet mappes
                    <ObligFagSemester
                      id="IkkeKnapp"
                      semester={1}
                      answer={klasseId}
                    />
                  )
                }
              </div>
            </div>

            <div className="Forti">
              <h5>Semester 2</h5>
              <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>
              <div className="fag">
                {
                  //sjekker om det er 5-10, hvis det er det vil den filtrer i ObligFagSemester2, med fagnavnet satt i VelgStudieRettning
                  klasseId === 2 ? (
                    <ObligFagSemester2
                      fagNavnStudierettning={fagNavnStudierettning}
                      semester={2}
                      answer={klasseId}
                    />
                  ) : (
                    // det sorterte arrayet mappes
                    <ObligFagSemester
                      id="IkkeKnapp"
                      semester={2}
                      answer={klasseId}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column" id="Hundre">
          <h3>Veien Videre</h3>
        </div>
        <div class="column" id="BygningBilde"></div>

        <div class="column" id="Atti">
      <h2 id="Left">
        Få oversikt over emnene du må ta, samt hvilke semestre du kan velge
        valgfrie emner/fag
      </h2>
      <p id="Beskrivelse">
        Semester fire er det semesteret du kan begynne å velge flere
        undervisningsfag. De obligatoriske emene i 3. semester er{" "}
        <bold>markert i gult </bold> . Så du får muligheten til å ta et fag til
        og få 60 studiepoeng i det emne, det er ikke nødvendig å ha 60
        studiepoeng i det valgfrie emne, men noe å tenke over i tilfelle du får
        lyst til å endre hvilke fag du ønsker som masterfag noe seinere i
        løpet/ha flere valgmuligheter for masterfag.
      </p>
    </div>
      </div>

      <div>
        {
          <VelgMuligheter
            fagNavnStudierettning={fagNavnStudierettning}
            studieRetning={studieRetning}
            fagNavn={fagNavn}
            masterId={masterId}
            klasseId={klasseId}
            obj={obj}
          ></VelgMuligheter>
        }
      </div>
    </>
  );
};
export default ObligFagCard;
